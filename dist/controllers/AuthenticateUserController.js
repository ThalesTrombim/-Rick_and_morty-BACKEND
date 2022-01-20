"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
const AuthenticateService_1 = require("../services/AuthenticateService");
class AuthenticateUserController {
    async handle(req, res, next) {
        const user = req.body;
        const service = new AuthenticateService_1.AuthenticateService();
        const result = await service.execute(user);
        return res.json(result);
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
