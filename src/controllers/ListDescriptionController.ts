import { Request, Response } from 'express';
import { ListDescService } from '../services/ListDescService';

class ListDescriptionController {
    async handle(req: Request, res: Response){
        const service = new ListDescService;
        const id = parseInt(req.params.id);

        const result = await service.execute(id);    

        return res.json(result);
    }
}

export { ListDescriptionController };