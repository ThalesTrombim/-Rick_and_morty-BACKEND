"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePlanetService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class DeletePlanetService {
    async execute(id) {
        const DeletePlanet = await prisma_1.default.planet.delete({
            where: {
                id: id
            }
        });
        return DeletePlanet;
    }
}
exports.DeletePlanetService = DeletePlanetService;
