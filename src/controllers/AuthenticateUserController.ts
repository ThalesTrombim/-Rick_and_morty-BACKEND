import { Request, Response, NextFunction } from 'express';
import { AuthenticateService } from '../services/AuthenticateService';

class AuthenticateUserController {
    async handle(req: Request, res: Response, next: NextFunction){
        const user = req.body;
        const service = new AuthenticateService();

        try{
            const result = await service.execute(user);
            return res.json(result)
        } catch(err){
            return res.json({error: err.message});
        }
    }
}

export { AuthenticateUserController };