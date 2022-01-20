"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetController = void 0;
const PlanetService_1 = require("../services/PlanetService");
class PlanetController {
    async handle(req, res) {
        const service = new PlanetService_1.PlanetService;
        const id = parseInt(req.params.id);
        const result = await service.execute(id);
        return res.json(result);
    }
}
exports.PlanetController = PlanetController;
