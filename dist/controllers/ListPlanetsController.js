"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPlanetsController = void 0;
const ListPlanetsService_1 = require("../services/ListPlanetsService");
class ListPlanetsController {
    async handle(req, res) {
        const service = new ListPlanetsService_1.ListPlanetsService;
        const result = await service.execute();
        return res.json(result);
    }
}
exports.ListPlanetsController = ListPlanetsController;
