import prismaClient from "../../prisma";

class ListarServicosService {
    async execute() {

        const servico = await prismaClient.servico.findMany({
            select:{
                id: true,
                nome: true,

            }
        })

        return servico
    }
}

export { ListarServicosService }