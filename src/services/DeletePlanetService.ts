import prismaClient from '../prisma';

class DeletePlanetService {
    async execute(id: number){
        const DeletePlanet = await prismaClient.planet.delete({
            where: {
                id: id
            }
        })

        return DeletePlanet;
    }
}

export { DeletePlanetService };