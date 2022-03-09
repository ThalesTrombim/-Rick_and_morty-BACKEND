import prismaClient from '../prisma';

class ListDescService {
    async execute(id: string){
        const desc = await prismaClient.description.findFirst({
            where: {
                id_reference: id
            }
        })

        return desc;
    }
}

export { ListDescService };