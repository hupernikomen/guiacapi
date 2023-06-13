import prismaClient from "../../prisma";


class UnicaLjService {
    async execute(loja_ID: string) {

        const loja = await prismaClient.loja.findUnique({
            where: {
                id: loja_ID,
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
                        oferta:true,
                        imagens: true,
                        campanha:{
                            select:{
                                nome:true,
                                id:true,
                                tema:true
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