"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class GetUserService {
    async execute(token) {
        const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        return { decoded };
    }
}
exports.GetUserService = GetUserService;
