import prismaClient from "../../prisma";

class ListaCampService {
    async execute() {

        const campanha = await prismaClient.campanha.findMany({
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