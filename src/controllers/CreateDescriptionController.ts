import { Request, Response } from 'express';
import { CreateDescriptionService } from '../services/CreateDescriptionService';

class CreateDescriptionController {
    async handle(req: Request, res: Response){
        const description = req.body;

        const createDescriptionService = new CreateDescriptionService();

        const result = await createDescriptionService.execute(description);
        
        return res.json(result)

    }
}

export { CreateDescriptionController };