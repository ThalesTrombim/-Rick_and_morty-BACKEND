import { Request, Response } from 'express';
import { GetUserService } from '../services/GetUserService'

class GetUserController {
    async handle(req: Request, res: Response){
        const authToken  = req.headers.authorization;
        const service = new GetUserService;

        const [,token] = authToken.split(" ");

        const result = await service.execute(token)     

        return res.json(result);
    }
}

export { GetUserController };