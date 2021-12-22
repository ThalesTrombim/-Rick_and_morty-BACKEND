import { Request, Response } from 'express';
import { CreatePlanetService } from '../services/CreatePlanetService';

class CreatePlanetController {
    async handle(req: Request, res: Response){
        const planet = req.body;

        const createPlanetService = new CreatePlanetService();

        const result = await createPlanetService.execute(planet);
        
        return res.json(result)

    }
}

export { CreatePlanetController };