import "dotenv/config";
import express , { Request, Response, NextFunction }  from 'express'
import z, { object, string } from 'zod';
import bcrypt from 'bcrypt';
import { PrismaClient, Prisma } from './generated/prisma/client';
import {PrismaPg} from "@prisma/adapter-pg";
import jwt from 'jsonwebtoken';
import { auth } from './auth/auth';
import { AppError } from "./AppError";

const secret = process.env.JWT_SECRET!;

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
})

export const client = new PrismaClient({
    adapter,
})

const app = express();

app.use(express.json());



app.post("/signup",async (req, res, next)=>{
    const requiredUser = z.object({
        email: z.string().min(3),
        password: z.string().min(8)
        .regex(/[A-Z]/)
        .regex(/[a-z]/)
        .regex(/[0-9]/)
        .regex(/[^A-Za-z0-9]/)
    })

    const parsedDataWithSuccess = requiredUser.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        return next(new AppError("invalid credentials", 400));
    }
    const email = req.body.email;
    const password = req.body.password;


    try{
            const hashPassword = await bcrypt.hash(password,5);

            const user = await client.user.create({
                data:{
                    email: email,
                    password: hashPassword
                }
            })
            await client.biltyCounter.create({
                data: {
                    userId: user.id,
                    lastBiltyNumber: 0
                }
            });
            res.status(200).json({
                message: "signedup successfully"
            })
        }catch(err){
            return next(err);
            // next(new AppError("internal server error", 500));
        
        }   
})

app.post("/signin", async(req, res,next)=>{
    const email =req.body.email;
    const password =req.body.password;

    try{
        const user = await client.user.findFirst({
        where:{
            email: email
        }
        })

        if(!user){
            return next(new AppError("user not found", 404));
        }
        
        const passwordMatch = await bcrypt.compare(password, user.password);

        if(passwordMatch){
            const token = jwt.sign({
                id: user.id.toString(),
            },secret);

            res.status(200).json({
                token,
            })
        }else{
            return next(new AppError("password invalid", 400));
        }
    }catch(err){
        return next(err)
    }
    
})

app.post("/create-bilty",auth, async (req, res,next)=>{
    const userId = req.userId;
    if(!userId){
        return next(new AppError("please login", 401));

    }

    const requiredInfo = z.object({
        consignorName   : z.string().min(3),
        consignorGST    : z.string().length(15)
                            .regex(/[A-Z]/)
                            .regex(/[0-9]/),
        consigneeName   : z.string().min(3),
        consigneeGST    : z.string().length(15)
                            .regex(/[A-Z]/)
                            .regex(/[0-9]/),
        vehicleNumber   : z.string().min(3),
        driverName      : z.string().min(3),
        driverPhone     : z.string().regex(/^[0-9]{10}$/),
        goodsDescription: z.string().min(3),
        quantity :        z.number().positive(),
        weight   :        z.number().positive(),
        freight  :        z.number().positive(),
        status   :        z.enum(["Created", "Pending", "Delivered"]),
    })

    const parsedDataWithSuccess = requiredInfo.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        return next(new AppError("invalid credentials", 400));
    }

    const bilty = await client.$transaction(async (tx)=>{

        const counter = await tx.biltyCounter.upsert({
            
            
            where:{
                userId: parseInt(userId),
            },
            update:{
                lastBiltyNumber: {
                increment: 1,
                },
            },
            create: {
                userId: parseInt(userId),
                lastBiltyNumber: 1,
            },
            
        })

        const newBilty = await tx.bilty.create({
            data:{
                biltyNumber     : counter.lastBiltyNumber,
                consignorName   : req.body.consignorName,
                consignorGST    : req.body.consignorGST,
                consigneeName   : req.body.consigneeName,
                consigneeGST    : req.body.consigneeGST,
                vehicleNumber   : req.body.vehicleNumber,
                driverName      : req.body.driverName,
                driverPhone     : req.body.driverPhone,
                goodsDescription: req.body.goodsDescription,
                quantity        : req.body.quantity,      
                weight          : req.body.weight,      
                freight         : req.body.freight,      
                status          : req.body.status,
                userId          : parseInt(userId)    
            }
        })
       

        return newBilty;
    },
 {
    maxWait: 10000,
    timeout: 15000
  })
    
    if(bilty !== null){
        res.status(201).json({
            message: "bilty created successfully",
            bilty,
        })
    }else{
        return next(new AppError("internal server error", 500));

    }
    
})


app.get("/dashboard",auth, async (req,res,next) => {
    const userId = req.userId;

        if(!userId){
            return next(new AppError("please login", 401));

    }

    try{
        const getBilties = await client.bilty.findMany({
            where:{
                userId: parseInt(userId),
            }
        })
        res.status(200).json({
            getBilties
        })
    }catch(err){
        return next(err);
    }
    
})

app.delete("/bilties/:id", auth, async (req, res,next)=>{
    const userId = req.userId;

        if(!userId){
            return next(new AppError("user not found", 401));

        }

    const biltyId = req.params.id;


        if(!biltyId || Array.isArray(biltyId)){
            return next(new AppError("please provide bilty id", 400));
        }
    
    try{
        await client.bilty.delete({
            where:{
                userId: parseInt(userId),
                id: parseInt(biltyId)
            }
        })
        res.status(200).json({
            message: "bilty deleted successfully"
        })
    }catch(err){
        return next(err);
        // return next(new AppError("bilty not found", 404));

    }
})

app.patch("/bilties/:id", auth, async (req, res,next)=>{
    const userId = req.userId;

        if(!userId){
            return next(new AppError("please login", 401));

        }

    const updateSchema = z.object({
        consignorName   : z.string().min(3).optional(),
        consignorGST    : z.string().length(15)
                            .regex(/[A-Z]/)
                            .regex(/[0-9]/).optional(),
        consigneeName   : z.string().min(3).optional(),
        consigneeGST    : z.string().length(15)
                            .regex(/[A-Z]/)
                            .regex(/[0-9]/).optional(),
        vehicleNumber   : z.string().min(3).optional(),
        driverName      : z.string().min(3).optional(),
        driverPhone     : z.string().regex(/^[0-9]{10}$/).optional(),
        goodsDescription: z.string().min(3).optional(),
        quantity :        z.number().positive().optional(),
        weight   :        z.number().positive().optional(),
        freight  :        z.number().positive().optional(),
        status   :        z.enum(["Created", "Pending", "Delivered"]).optional(),
    })

    const result = updateSchema.safeParse(req.body);

    if(!result.success){
        return next(new AppError("invalid credentials", 400));

    }

    const updateData = Object.fromEntries(
        Object.entries(result.data).filter(
            ([_, value]) => value !== undefined
        )
    );

    const biltyId = req.params.id;

        if(!biltyId || Array.isArray(biltyId)){
            return next(new AppError("please provide bilty id", 400));

        }

    try{
        await client.bilty.update({
            where:{
                userId: parseInt(userId),
                id: parseInt(biltyId)
            },
            data: updateData
        })
        res.status(200).json({
            message: "bilty uodated"
        })
    }catch(err){
            return next(err);

        // return next(new AppError("bilty not found", 404));

    }
    
})

app.get("/bilties",auth, async (req,res,next)=>{
    const page = Number(req.query.page ?? 1);
    const limit = Number(req.query.limit ?? 10);
    const sort = req.query.sort ?? "createdAt";
    const order = req.query.order ?? "desc"

    const allowedSortFields = [
        "createdAt",
        "freight",
        "biltyNumber"
    ];

    if(typeof sort !== "string" || !allowedSortFields.includes(String(sort))){
        return next(new AppError("invalid input", 400))
    }
    if(typeof order !== "string" || !["asc", "desc"].includes(String(order))){
        return next(new AppError("invalid input", 400))
    }
    

    const status = req.query.status;
    const search =  typeof req.query.search === "string"
            ? req.query.search.trim()
            : "";

    if(!Number.isInteger(page) || page < 1 || !Number.isInteger(limit) || limit < 1 || limit > 100){
        return next(new AppError("invalid input", 400))
    }

    if(status !== undefined && !["Created", "Pending", "Delivered"].includes(String(status))){
        return next(new AppError("Invalid status", 400));
    }
    // if(search === undefined){
    //     return next(new AppError("please enter things to search", 400));
    // }

    const userId = req.userId;

    if(!userId){
        return next(new AppError("please login", 401));
    }
    const skip = (page -1) *limit;

    

    try{
        const where = {
                userId: parseInt(userId),
                
                ...(status && {
                    status: String(status)
                }),
                ...(search && { //... is for optional means if the search is given then ok include it else no worries 
                    OR:[
                        {vehicleNumber : {contains : String(search)}},
                        {consignorGST : {contains : String(search)}},
                        {consigneeName : {contains : String(search)}},
                        {consigneeGST : {contains : String(search)}},
                        {driverName : {contains : String(search)}},
                        {driverPhone : {contains : String(search)}},
                    ]
                })
            }
            
        const biltyTransacction = await client.$transaction(async (tx)=>{

            const filteredBilties = await tx.bilty.findMany({
                where,
                skip,
                take: limit,
                orderBy:[
                    {[sort]: order},
                    {id: "desc"}
                    
                ]
            })

            const totalBilties = await tx.bilty.count({
                where,
            });

            const totalPages = Math.ceil(totalBilties / limit);
            return {
                filteredBilties,
                totalBilties,
                totalPages
            }
        },{
            maxWait: 10000,
            timeout: 15000
        })
        res.status(200).json({
                bilties: biltyTransacction.filteredBilties,
                paginationData:{
                    page: page,
                    limit: limit,
                    totalBilties: biltyTransacction.totalBilties,
                    totalPages: biltyTransacction.totalPages
                }    
            })
        
    }catch(err){
        return next(err);
    }

})


app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
    console.log(err);

    if(err instanceof Prisma.PrismaClientKnownRequestError){
        if(err.code === "P2025"){
            console.log(err);
            return res.status(404).json({
                message: "Request Object not Found"
            })
        }else if(err.code === "P2002"){
            console.log(err);
            return res.status(409).json({
                message: "already exist"
            })
        }
    }
    if(err instanceof AppError){
            return res.status(err.statusCode).json({
            message: err.message 
        });
    }

    return res.status(500).json({
                message: "internal server error"
            })
})

export default app