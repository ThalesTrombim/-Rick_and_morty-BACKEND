import prismaClient from '../prisma';

class ListDescService {
    async execute(id: number){
        const desc = await prismaClient.description.findFirst({
            where: {
                id: id
            }
        })

        return desc;
    }
}

export { ListDescService };