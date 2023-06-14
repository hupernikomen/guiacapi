import prismaClient from "../../prisma";

interface userRequest {
    lojaID: string
}

class LojaService {
    async execute({
        lojaID
    }: userRequest) {

        const loja = await prismaClient.loja.findUnique({
            where: {
                id: lojaID,
            },
            select: {
                id: true,
                statusGuia: true,
                endereco: true,
                referencia: true,
                bio: true,
                nome: true,
                avatar: true,
                entrega: true,
                latlng: true,
                produtos: {
                    select: {
                        id: true,
                        nome: true,
                        preco: true,
                        oferta: true,
                        imagens: true,
                        campanha: {
                            select: {
                                nome: true,
                                id: true,
                                tema: true
                            }
                        }
                    }
                }
            }
        })

        return loja
    }
}

export { LojaService }