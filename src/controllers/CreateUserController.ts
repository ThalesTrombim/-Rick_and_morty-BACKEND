import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response){
        const user = req.body;

        const createUserService = new CreateUserService();

        const result = await createUserService.execute(user);
        
        return res.json(result)

    }
}

export { CreateUserController };