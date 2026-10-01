"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const zod_1 = __importDefault(require("zod"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = require("./generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("./auth/auth");
const AppError_1 = require("./AppError");
const secret = process.env.JWT_SECRET;
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const client = new client_1.PrismaClient({
    adapter,
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/signup", async (req, res, next) => {
    const requiredUser = zod_1.default.object({
        email: zod_1.default.string().min(3),
        password: zod_1.default.string().min(8)
            .regex(/[A-Z]/)
            .regex(/[a-z]/)
            .regex(/[0-9]/)
            .regex(/[^A-Za-z0-9]/)
    });
    const parsedDataWithSuccess = requiredUser.safeParse(req.body);
    if (!parsedDataWithSuccess.success) {
        return next(new AppError_1.AppError("invalid credentials", 400));
    }
    const email = req.body.email;
    const password = req.body.password;
    try {
        const hashPassword = await bcrypt_1.default.hash(password, 5);
        const user = await client.user.create({
            data: {
                email: email,
                password: hashPassword
            }
        });
        await client.biltyCounter.create({
            data: {
                userId: user.id,
                lastBiltyNumber: 0
            }
        });
        res.status(200).json({
            message: "signedup successfully"
        });
    }
    catch (err) {
        return next(err);
        // next(new AppError("internal server error", 500));
    }
});
app.post("/signin", async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await client.user.findFirst({
            where: {
                email: email
            }
        });
        if (!user) {
            return next(new AppError_1.AppError("user not found", 404));
        }
        const passwordMatch = await bcrypt_1.default.compare(password, user.password);
        if (passwordMatch) {
            const token = jsonwebtoken_1.default.sign({
                id: user.id.toString(),
            }, secret);
            res.status(200).json({
                token,
            });
        }
        else {
            return next(new AppError_1.AppError("password invalid", 400));
        }
    }
    catch (err) {
        return next(err);
    }
});
app.post("/create-bilty", auth_1.auth, async (req, res, next) => {
    const userId = req.userId;
    if (!userId) {
        return next(new AppError_1.AppError("please login", 401));
    }
    const requiredInfo = zod_1.default.object({
        consignorName: zod_1.default.string().min(3),
        consignorGST: zod_1.default.string().length(15)
            .regex(/[A-Z]/)
            .regex(/[0-9]/),
        consigneeName: zod_1.default.string().min(3),
        consigneeGST: zod_1.default.string().length(15)
            .regex(/[A-Z]/)
            .regex(/[0-9]/),
        vehicleNumber: zod_1.default.string().min(3),
        driverName: zod_1.default.string().min(3),
        driverPhone: zod_1.default.string().regex(/^[0-9]{10}$/),
        goodsDescription: zod_1.default.string().min(3),
        quantity: zod_1.default.number().positive(),
        weight: zod_1.default.number().positive(),
        freight: zod_1.default.number().positive(),
        status: zod_1.default.enum(["Created", "Pending", "Delivered"]),
    });
    const parsedDataWithSuccess = requiredInfo.safeParse(req.body);
    if (!parsedDataWithSuccess.success) {
        return next(new AppError_1.AppError("invalid credentials", 400));
    }
    const bilty = await client.$transaction(async (tx) => {
        const counter = await tx.biltyCounter.update({
            where: {
                userId: parseInt(userId),
            },
            data: {
                lastBiltyNumber: {
                    increment: 1
                }
            }
        });
        const newBilty = await tx.bilty.create({
            data: {
                biltyNumber: counter.lastBiltyNumber,
                consignorName: req.body.consignorName,
                consignorGST: req.body.consignorGST,
                consigneeName: req.body.consigneeName,
                consigneeGST: req.body.consigneeGST,
                vehicleNumber: req.body.vehicleNumber,
                driverName: req.body.driverName,
                driverPhone: req.body.driverPhone,
                goodsDescription: req.body.goodsDescription,
                quantity: req.body.quantity,
                weight: req.body.weight,
                freight: req.body.freight,
                status: req.body.status,
                userId: parseInt(userId)
            }
        });
        return newBilty;
    }, {
        maxWait: 10000,
        timeout: 15000
    });
    if (bilty !== null) {
        res.status(201).json({
            message: "bilty created successfully"
        });
    }
    else {
        return next(new AppError_1.AppError("internal server error", 500));
    }
});
app.get("/dashboard", auth_1.auth, async (req, res, next) => {
    const userId = req.userId;
    if (!userId) {
        return next(new AppError_1.AppError("please login", 401));
    }
    try {
        const getBilties = await client.bilty.findMany({
            where: {
                userId: parseInt(userId),
            }
        });
        res.status(200).json({
            getBilties
        });
    }
    catch (err) {
        return next(err);
    }
});
app.delete("/bilties/:id", auth_1.auth, async (req, res, next) => {
    const userId = req.userId;
    if (!userId) {
        return next(new AppError_1.AppError("user not found", 401));
    }
    const biltyId = req.params.id;
    if (!biltyId || Array.isArray(biltyId)) {
        return next(new AppError_1.AppError("please provide bilty id", 400));
    }
    try {
        await client.bilty.delete({
            where: {
                userId: parseInt(userId),
                id: parseInt(biltyId)
            }
        });
        res.status(200).json({
            message: "bilty deleted successfully"
        });
    }
    catch (err) {
        return next(err);
        // return next(new AppError("bilty not found", 404));
    }
});
app.patch("/bilties/:id", auth_1.auth, async (req, res, next) => {
    const userId = req.userId;
    if (!userId) {
        return next(new AppError_1.AppError("please login", 401));
    }
    const updateSchema = zod_1.default.object({
        consignorName: zod_1.default.string().min(3).optional(),
        consignorGST: zod_1.default.string().length(15)
            .regex(/[A-Z]/)
            .regex(/[0-9]/).optional(),
        consigneeName: zod_1.default.string().min(3).optional(),
        consigneeGST: zod_1.default.string().length(15)
            .regex(/[A-Z]/)
            .regex(/[0-9]/).optional(),
        vehicleNumber: zod_1.default.string().min(3).optional(),
        driverName: zod_1.default.string().min(3).optional(),
        driverPhone: zod_1.default.string().regex(/^[0-9]{10}$/).optional(),
        goodsDescription: zod_1.default.string().min(3).optional(),
        quantity: zod_1.default.number().positive().optional(),
        weight: zod_1.default.number().positive().optional(),
        freight: zod_1.default.number().positive().optional(),
        status: zod_1.default.enum(["Created", "Pending", "Delivered"]).optional(),
    });
    const result = updateSchema.safeParse(req.body);
    if (!result.success) {
        return next(new AppError_1.AppError("invalid credentials", 400));
    }
    const updateData = Object.fromEntries(Object.entries(result.data).filter(([_, value]) => value !== undefined));
    const biltyId = req.params.id;
    if (!biltyId || Array.isArray(biltyId)) {
        return next(new AppError_1.AppError("please provide bilty id", 400));
    }
    try {
        await client.bilty.update({
            where: {
                userId: parseInt(userId),
                id: parseInt(biltyId)
            },
            data: updateData
        });
        res.status(200).json({
            message: "bilty uodated"
        });
    }
    catch (err) {
        return next(err);
        // return next(new AppError("bilty not found", 404));
    }
});
app.get("/bilties", auth_1.auth, async (req, res, next) => {
    const page = Number(req.query.page ?? 1);
    const limit = Number(req.query.limit ?? 10);
    const status = req.query.status;
    const search = req.query.search;
    if (!Number.isInteger(page) || page < 1 || !Number.isInteger(limit) || limit < 10 || limit > 100) {
        return next(new AppError_1.AppError("invalid input", 400));
    }
    if (status !== undefined && !["Created", "Pending", "Delivered"].includes(String(status))) {
        return next(new AppError_1.AppError("Invalid status", 400));
    }
    // if(search === undefined){
    //     return next(new AppError("please enter things to search", 400));
    // }
    const userId = req.userId;
    if (!userId) {
        return next(new AppError_1.AppError("please login", 401));
    }
    try {
        const filter = await client.bilty.findMany({
            where: {
                userId: parseInt(userId),
                ...(status && {
                    status: String(status)
                }),
                ...(search && {
                    OR: [
                        { vehicleNumber: { contains: String(search) } },
                        { consignorGST: { contains: String(search) } },
                        { consigneeName: { contains: String(search) } },
                        { consigneeGST: { contains: String(search) } },
                        { driverName: { contains: String(search) } },
                        { driverPhone: { contains: String(search) } },
                    ]
                })
            }
        });
        console.log(filter);
        res.status(200).json({
            filter
        });
    }
    catch (err) {
        return next(err);
    }
});
app.use((err, req, res, next) => {
    console.log(err);
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
            console.log(err);
            return res.status(404).json({
                message: "Request Object not Found"
            });
        }
        else if (err.code === "P2002") {
            console.log(err);
            return res.status(409).json({
                message: "already exist"
            });
        }
    }
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }
    return res.status(500).json({
        message: "internal server error"
    });
});
app.listen(process.env.PORT);
//# sourceMappingURL=index.js.map