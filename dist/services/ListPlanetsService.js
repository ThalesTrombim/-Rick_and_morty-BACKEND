"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPlanetsService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class ListPlanetsService {
    async execute() {
        const planets = await prisma_1.default.planet.findMany();
        return planets;
    }
}
exports.ListPlanetsService = ListPlanetsService;
