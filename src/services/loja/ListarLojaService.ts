import prismaClient from "../../prisma";

interface userRequest {
    lojaID: string
}

class ListarLojaService {
    async execute({
        lojaID
    }: userRequest) {

        const loja = await prismaClient.loja.findUnique({
            where: {
                id: lojaID,
            },
            select: {
                id: true,
                bio: true,
                latlng:true,
                nome:true,
                endereco:true,
                bairro: true,
                referencia:true,
                logo: true,
                whatsapp: true,
                vendedores:true,
                produtos: {
                    select: {
                        id: true,
                        nome: true,
                        descricao: true,
                        preco: true,
                        oferta: true,
                        tamanho: true,
                        imagens: true,
                        categoria: {
                          select: {
                            id: true,
                            nome: true,
                          },
                        },
                      },
                },
                regiao: true,
                entrega:true
            }
        })

        return loja
    }
}

export { ListarLojaService }