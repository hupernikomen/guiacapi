import prismaClient from "../../prisma";

interface servicoRequest {
    nome: string,
    nomeServico: string,
    listaServicos:string,
    bio: string,
    email: string,
    endereco: string,
    whatsapp: string,
    domicilio: boolean,
    servicoID:string
}

class AtualizarServicoService {

    async execute({
        nome,
        nomeServico,
        listaServicos,
        bio,
        email,
        endereco,
        whatsapp,
        domicilio,
        servicoID
    }: servicoRequest) {

        const servico = await prismaClient.servico.update({
            where:{
                id:servicoID
            },
            data: {
                nome,
                nomeServico,
                listaServicos,
                bio,
                email,
                endereco,
                whatsapp,
                domicilio,
            }
        })

        return servico
    }
}

export { AtualizarServicoService  }