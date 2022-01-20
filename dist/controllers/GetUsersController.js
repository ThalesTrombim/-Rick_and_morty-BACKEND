"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersController = void 0;
const GetUsersServices_1 = require("../services/GetUsersServices");
class GetUsersController {
    async handle(req, res) {
        const service = new GetUsersServices_1.GetUsersService;
        const result = await service.execute();
        return res.json(result);
    }
}
exports.GetUsersController = GetUsersController;
