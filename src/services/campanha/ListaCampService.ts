import prismaClient from "../../prisma";

class ListaCampService {
    async execute() {

        const campanha = await prismaClient.campanha.findMany({
            where:{
                status:true
            },
            select:{
                id: true,
                nome: true,
                status:true,
                tema:true
                
            }
        })

        return campanha
    }
}

export { ListaCampService }