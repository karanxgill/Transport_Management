"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = auth;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = require("../AppError");
const secret = process.env.JWT_SECRET;
async function auth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || typeof authHeader !== "string") {
        return next(new AppError_1.AppError("token missing", 401));
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        return next(new AppError_1.AppError("token missing", 401));
    }
    try {
        const response = jsonwebtoken_1.default.verify(token, secret);
        if (typeof response === "string" || !("id" in response)) {
            return next(new AppError_1.AppError("invalid credentials", 401));
        }
        else {
            req.userId = response.id;
            next();
        }
    }
    catch (err) {
        return next(new AppError_1.AppError("invalid or expired token", 401));
    }
}
//# sourceMappingURL=auth.js.map