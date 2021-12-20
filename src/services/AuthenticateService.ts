import axios from 'axios';
import prismaClient from '../prisma';
import { sign } from 'jsonwebtoken';

interface IUserCreate{
    name: string;
    password: string
}

class AuthenticateService {
    async execute(userAdmin: IUserCreate){
        let user = await prismaClient.user.findFirst({
            where: {
                name: userAdmin.name
            }
        })

        if(!user){
            user = await prismaClient.user.create({
                data: {
                    name: userAdmin.name,
                    password: userAdmin.password,
                }
            })
        }

        const token = sign(
            {
                user
            },
            process.env.JWT_SECRET,
            {
                subject: userAdmin.name,
                expiresIn: "2d"
            }
        )

        return { token, user };
    }
}

export { AuthenticateService };