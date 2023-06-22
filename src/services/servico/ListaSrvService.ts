import prismaClient from "../../prisma";

class ListaSrvService {
    async execute() {

        const servico = await prismaClient.servico.findMany({
            select:{
                id: true,
                nome: true,
                icone:true,
                _count:true
            }
        })

        return servico
    }
}

export { ListaSrvService }