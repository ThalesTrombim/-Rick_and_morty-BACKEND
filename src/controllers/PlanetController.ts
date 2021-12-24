import { Request, Response } from 'express';
import { PlanetService } from '../services/PlanetService';

class PlanetController {
    async handle(req: Request, res: Response){
        const service = new PlanetService;
        const id = parseInt(req.params.id);

        const result = await service.execute(id);    

        return res.json(result);
    }
}

export { PlanetController };