"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAdmin = void 0;
const prisma_1 = __importDefault(require("../prisma"));
async function ensureAdmin(req, res, next) {
    const { user_id } = req;
    const { admin } = await prisma_1.default.user.findFirst({
        where: {
            id: user_id
        }
    });
    if (admin) {
        return next();
    }
    return res.status(401).json({
        error: "Unauthorized",
    });
}
exports.ensureAdmin = ensureAdmin;
