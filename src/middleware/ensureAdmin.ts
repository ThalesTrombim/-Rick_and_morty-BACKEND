import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import prismaClient from '../prisma';

interface IPayload {
    sub: string
}

export async function ensureAdmin(req: Request, res:Response, next: NextFunction){
    const { user_id } = req;


    const { admin } = await prismaClient.user.findFirst({
        where: {
            id: user_id
        }
    })

    if(admin){
        return next();
    }

    return res.status(401).json({
        error: "Unauthorized",
    });
}