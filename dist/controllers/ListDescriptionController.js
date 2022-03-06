"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDescriptionController = void 0;
const ListDescService_1 = require("../services/ListDescService");
class ListDescriptionController {
    async handle(req, res) {
        const service = new ListDescService_1.ListDescService;
        const id = parseInt(req.params.id);
        const result = await service.execute(id);
        return res.json(result);
    }
}
exports.ListDescriptionController = ListDescriptionController;
