import prismaClient from '../prisma';

interface IPlanet {
    id: string;
    name: string;
    description: string;
    dimension?: string;
    first_episode?: string;
    some_habitants?: string;
}


class CreatePlanetService {
    async execute(newPlanet: IPlanet){
        let planet = await prismaClient.planet.findFirst({
            where: {
                name: newPlanet.name
            }
        })

        if(planet){
            throw new Error("planet already registerd!");
        }

        if(!planet){
            planet = await prismaClient.planet.create({
                data: {
                    name: newPlanet.name,
                    description: newPlanet.description,
                    dimension: newPlanet.dimension,
                    first_episode: newPlanet.first_episode,
                    some_habitants: newPlanet.some_habitants
                }
            })
        } 

        return planet;
    }
}

export { CreatePlanetService };