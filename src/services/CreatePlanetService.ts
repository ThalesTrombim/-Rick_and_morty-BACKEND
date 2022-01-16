import prismaClient from '../prisma';

interface IPlanet {
    id: number;
    id_reference: string;
    description?: string;
    image: string;
}


class CreatePlanetService {
    async execute(newPlanet: IPlanet){
        let planet = await prismaClient.planet.findFirst({
            where: {
                id_reference: newPlanet.id_reference
            }
        })

        if(planet){
            throw new Error("planet already registerd!");
        }

        if(!planet){
            planet = await prismaClient.planet.create({
                data: {
                    id_reference: newPlanet.id_reference,
                    description: newPlanet.description,
                    image: newPlanet.image,
                }
            })
        } 

        return planet;
    }
}

export { CreatePlanetService };