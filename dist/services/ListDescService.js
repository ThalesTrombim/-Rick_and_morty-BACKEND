"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDescService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class ListDescService {
    async execute(id) {
        const desc = await prisma_1.default.description.findFirst({
            where: {
                id_reference: id
            }
        });
        if (!desc) {
            throw new Error("Description not exists");
        }
        return desc;
    }
}
exports.ListDescService = ListDescService;
