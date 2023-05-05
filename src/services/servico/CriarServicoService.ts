import prismaClient from "../../prisma";

interface servicoRequest {
    foto: object,
    arrPortfolio: object,
    nome: string,
    nomeServico: string,
    listaServicos: string,
    bio: string,
    email: string,
    endereco: string,
    whatsapp: string,
    domicilio: boolean,
    categoria: string
}

class CriarServicoService {

    async execute({
        foto,
        arrPortfolio,
        nome,
        nomeServico,
        listaServicos,
        bio,
        email,
        endereco,
        whatsapp,
        domicilio,
        categoria
    }: servicoRequest) {

        const servico = await prismaClient.servico.create({
            data: {
                foto,
                arrPortfolio,
                nome,
                nomeServico,
                listaServicos,
                bio,
                email,
                endereco,
                whatsapp,
                domicilio,
                categoria
            }
        })

        return servico
    }
}

export { CriarServicoService }