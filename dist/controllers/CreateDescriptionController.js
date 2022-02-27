"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDescriptionController = void 0;
const CreateDescriptionService_1 = require("../services/CreateDescriptionService");
class CreateDescriptionController {
    async handle(req, res) {
        const description = req.body;
        const createDescriptionService = new CreateDescriptionService_1.CreateDescriptionService();
        const result = await createDescriptionService.execute(description);
        return res.json(result);
    }
}
exports.CreateDescriptionController = CreateDescriptionController;
