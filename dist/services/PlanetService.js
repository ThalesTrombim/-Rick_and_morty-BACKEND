"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class PlanetService {
    async execute(id) {
        const planet = await prisma_1.default.planet.findFirst({
            where: {
                id: id
            }
        });
        return planet;
    }
}
exports.PlanetService = PlanetService;
