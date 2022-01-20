"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePlanetController = void 0;
const DeletePlanetService_1 = require("../services/DeletePlanetService");
class DeletePlanetController {
    async handle(req, res) {
        const service = new DeletePlanetService_1.DeletePlanetService;
        const id = parseInt(req.params.id);
        const result = await service.execute(id);
        return res.json(`planet ${result.id_reference} deleted`);
    }
}
exports.DeletePlanetController = DeletePlanetController;
