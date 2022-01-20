"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcryptjs_1 = require("bcryptjs");
class CreateUserService {
    async execute({ email, name, password, admin = false }) {
        if (!email) {
            throw new Error("Email incorrect");
        }
        const userAlreadyExists = await prisma_1.default.user.findFirst({
            where: {
                email: email
            }
        });
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }
        const hashedPass = await (0, bcryptjs_1.hash)(password, 8);
        const user = await prisma_1.default.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPass,
                admin: admin
            }
        });
        return user;
    }
}
exports.CreateUserService = CreateUserService;
