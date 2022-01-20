"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserController = void 0;
const GetUserService_1 = require("../services/GetUserService");
class GetUserController {
    async handle(req, res) {
        const authToken = req.headers.authorization;
        const service = new GetUserService_1.GetUserService;
        const [, token] = authToken.split(" ");
        const result = await service.execute(token);
        return res.json(result);
    }
}
exports.GetUserController = GetUserController;
