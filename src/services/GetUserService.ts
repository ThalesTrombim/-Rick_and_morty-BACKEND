import { verify } from 'jsonwebtoken';

class GetUserService {

    async execute(token: string){

        const decoded= verify(token, process.env.JWT_SECRET);

        return { decoded };
    }
}

export { GetUserService }