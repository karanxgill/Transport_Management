import {Request,Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { AppError } from "../AppError";

const secret = process.env.JWT_SECRET!;

export async function auth(req: Request, res: Response,next: NextFunction){

    const authHeader = req.headers.authorization;

    if(!authHeader || typeof authHeader !== "string"){
        return next(new AppError("token missing",401))
    }
    const token = authHeader.split(" ")[1];
    if(!token){
        return next(new AppError("token missing",401))
    }

    try{
        const response = jwt.verify(token, secret);

        if(typeof response === "string" || !("id" in response)){
            return next(new AppError("invalid credentials",401))
        }else{
            req.userId = response.id;
            next();
        }
    }catch(err){
        return next(new AppError("invalid or expired token", 401));
    }
}

