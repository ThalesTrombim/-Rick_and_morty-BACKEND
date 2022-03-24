import prismaClient from '../prisma';

class ListDescService {
    async execute(id: string){
        const desc = await prismaClient.description.findFirst({
            where: {
                id_reference: id
            }
        })

        if(!desc){
            throw new Error("Description not exists")
        }

        return desc;
    }
}

export { ListDescService };