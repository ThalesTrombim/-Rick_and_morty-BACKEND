import { Request, Response } from 'express';
import { ListPlanetsService } from '../services/ListPlanetsService';

class ListPlanetsController {
    async handle(req: Request, res: Response){
        const service = new ListPlanetsService;

        const result = await service.execute()      

        return res.json(result);
    }
}

export { ListPlanetsController };