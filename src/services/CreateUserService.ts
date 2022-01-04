import prismaClient from '../prisma';
import { hash } from 'bcryptjs';

interface IUserCreate{
    email: string;
    name: string;
    password: string;
    admin: boolean;
}


class CreateUserService {
    async execute({ email, name, password, admin = false } : IUserCreate){
        if(!email) {
            throw new Error("Email incorrect");
        }
        
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        const hashedPass = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPass,
                admin: admin
            }
        })

        return user;
    }
}

export { CreateUserService };