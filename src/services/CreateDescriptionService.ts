import prismaClient from '../prisma';

interface IDescription {
    id: number;
    id_reference: string;
    desc: string;
    image?: string;
}


class CreateDescriptionService {
    async execute(newDescription: IDescription){
        let description = await prismaClient.description.findFirst({
            where: {
                id_reference: newDescription.id_reference
            }
        })

        if(description){
            throw new Error("character desc, already registered!");
        }

        if(!description){
            description = await prismaClient.description.create({
                data: {
                    id_reference: newDescription.id_reference,
                    desc: newDescription.desc,
                    image: newDescription.image,
                }
            })
        } 

        return description;
    }
}

export { CreateDescriptionService };