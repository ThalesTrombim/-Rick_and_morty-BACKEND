"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class GetUsersService {
    async execute() {
        const users = await prisma_1.default.user.findMany();
        return users;
    }
}
exports.GetUsersService = GetUsersService;
