import { Request, Response } from 'express';
import { DeletePlanetService } from '../services/DeletePlanetService';

class DeletePlanetController {
    async handle(req: Request, res: Response){
        const service = new DeletePlanetService;
        const id = parseInt(req.params.id)

        const result = await service.execute(id)      

        return res.json(`planet ${result.name} deleted`);
    }
}

export { DeletePlanetController };