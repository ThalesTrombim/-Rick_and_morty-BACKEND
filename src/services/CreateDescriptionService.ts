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
            throw new Error("This character already has a description registered!");
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

        return "Character description successfully created";
    }
}

export { CreateDescriptionService };