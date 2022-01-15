import prismaClient from '../prisma';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

interface IAuthRequest{
    email: string;
    password: string;
}

class AuthenticateService {
    async execute({ email, password }: IAuthRequest){

        let user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(!user) {
            throw new Error("Email/Password Incorrect")
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Email/Password Incorrect")
        }
        
        const token = sign(
            {
                name: user.name
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: "1d"
            }
        )

        return { token};
    }
}

export { AuthenticateService };