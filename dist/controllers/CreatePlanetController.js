"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlanetController = void 0;
const CreatePlanetService_1 = require("../services/CreatePlanetService");
class CreatePlanetController {
    async handle(req, res) {
        const planet = req.body;
        const createPlanetService = new CreatePlanetService_1.CreatePlanetService();
        const result = await createPlanetService.execute(planet);
        return res.json(result);
    }
}
exports.CreatePlanetController = CreatePlanetController;
