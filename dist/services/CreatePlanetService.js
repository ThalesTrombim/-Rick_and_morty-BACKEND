"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlanetService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class CreatePlanetService {
    async execute(newPlanet) {
        let planet = await prisma_1.default.planet.findFirst({
            where: {
                id_reference: newPlanet.id_reference
            }
        });
        if (planet) {
            throw new Error("planet already registered!");
        }
        if (!planet) {
            planet = await prisma_1.default.planet.create({
                data: {
                    id_reference: newPlanet.id_reference,
                    description: newPlanet.description,
                    image: newPlanet.image,
                }
            });
        }
        return planet;
    }
}
exports.CreatePlanetService = CreatePlanetService;
