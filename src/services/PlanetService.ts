import prismaClient from '../prisma';

class PlanetService {
    async execute(id: number){
        const planet = await prismaClient.planet.findFirst({
            where: {
                id: id
            }
        })

        return planet;
    }
}

export { PlanetService };