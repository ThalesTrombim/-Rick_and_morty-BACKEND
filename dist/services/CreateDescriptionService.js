"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDescriptionService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class CreateDescriptionService {
    async execute(newDescription) {
        let description = await prisma_1.default.description.findFirst({
            where: {
                id_reference: newDescription.id_reference
            }
        });
        if (description) {
            throw new Error("character description, already registered!");
        }
        if (!description) {
            description = await prisma_1.default.description.create({
                data: {
                    id_reference: newDescription.id_reference,
                    desc: newDescription.desc,
                    image: newDescription.image,
                }
            });
        }
        return description;
    }
}
exports.CreateDescriptionService = CreateDescriptionService;
