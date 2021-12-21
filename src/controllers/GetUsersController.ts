import { Request, Response } from 'express';
import { GetUsersService } from '../services/GetUsersServices'

class GetUsersController {
    async handle(req: Request, res: Response){
        const service = new GetUsersService;

        const result = await service.execute()      

        return res.json(result);
    }
}

export { GetUsersController };