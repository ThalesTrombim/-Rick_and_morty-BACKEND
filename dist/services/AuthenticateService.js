"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const jsonwebtoken_1 = require("jsonwebtoken");
const bcryptjs_1 = require("bcryptjs");
class AuthenticateService {
    async execute({ email, password }) {
        let user = await prisma_1.default.user.findFirst({
            where: {
                email: email
            }
        });
        if (!user) {
            throw new Error("Email/Password Incorrect");
        }
        const passwordMatch = await (0, bcryptjs_1.compare)(password, user.password);
        if (!passwordMatch) {
            throw new Error("Email/Password Incorrect");
        }
        const token = (0, jsonwebtoken_1.sign)({
            name: user.name
        }, process.env.JWT_SECRET, {
            subject: user.id,
            expiresIn: "1d"
        });
        return { token };
    }
}
exports.AuthenticateService = AuthenticateService;
