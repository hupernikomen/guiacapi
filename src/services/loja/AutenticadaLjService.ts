import prismaClient from "../../prisma";

class AutenticadaLjService {
    async execute(loja_ID: string) {
        const loja = await prismaClient.loja.findFirst({
            where:{
                id: loja_ID
            },
            select: {
                id: true,
                nome: true,
                latlng:true,
                bio: true,
                vendedores:true,
                bairro:true,
                statusGuia: true,
                referencia:true,
                avatar: true,
                endereco:true,
                entrega:true,
                regiao:{
                    select:{
                        nome:true,
                    }
                },
                produtos: {
                    select:{
                        nome:true,
                        descricao:true,
                        preco:true,
                        oferta:true,
                        campanha:{
                            select:{
                                id:true,
                                nome:true
                            }
                        },
                        tamanho:true
                    }
                },

            }
        })

        return loja
    }
}

export { AutenticadaLjService }