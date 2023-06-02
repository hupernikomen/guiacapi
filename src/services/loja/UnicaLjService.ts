import prismaClient from "../../prisma";

interface userRequest {
    lojaID: string
}

class UnicaLjService {
    async execute({
        lojaID
    }: userRequest) {

        const loja = await prismaClient.loja.findUnique({
            where: {
                id: lojaID,
            },
            select: {
                id: true,
                statusGuia:true,
                bio: true,
                latlng:true,
                nome:true,
                endereco:true,
                bairro: true,
                referencia:true,
                avatar: true,
                vendedores:true,
                regiao: true,
                entrega:true,
                produtos: {
                    select: {
                        id: true,
                        nome: true,
                        preco: true,
                        imagens: true,
                        campanha:{
                            select:{
                                nome:true
                            }
                        }
                      },
                },
            }
        })

        return loja
    }
}

export { UnicaLjService }