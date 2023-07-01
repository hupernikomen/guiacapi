import prismaClient from "../../prisma";

class ListarCampanhasInativasService {
    async execute() {

        const campanha = await prismaClient.campanha.findMany({
            where: {
                status:false
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

export { ListarCampanhasInativasService }