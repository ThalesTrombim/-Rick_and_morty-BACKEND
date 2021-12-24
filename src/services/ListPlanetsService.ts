import prismaClient from '../prisma';

class ListPlanetsService {
    async execute(){
        const planets = await prismaClient.planet.findMany()

        return planets;
    }
}

export { ListPlanetsService };