import prismaClient from "../../prisma";

class ListarServicosService {
    async execute() {

        const servico = await prismaClient.servico.findMany({
            select:{
                id: true,
                nome: true,
                domicilio:true,
                bio:true,
                endereco:true,
                foto:true,
                whatsapp:true,
                nomeServico:true,
                listaServicos:true,
                arrPortfolio:true,
                categoria:true
            }
        })

        return servico
    }
}

export { ListarServicosService }