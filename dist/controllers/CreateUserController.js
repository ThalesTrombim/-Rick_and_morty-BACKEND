"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserService_1 = require("../services/CreateUserService");
class CreateUserController {
    async handle(req, res) {
        const user = req.body;
        const createUserService = new CreateUserService_1.CreateUserService();
        const result = await createUserService.execute(user);
        return res.json(result);
    }
}
exports.CreateUserController = CreateUserController;
