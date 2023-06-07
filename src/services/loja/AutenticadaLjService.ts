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
                        id: true,
                        nome: true,
                        preco: true,
                        descricao: true,
                        tamanho: true,
                        oferta: true,
                        imagens: true,
                        campanha:{
                          select:{
                            id:true,
                            nome:true,
                            tema:true
                          }
                        }
                    }
                },

            }
        })

        return loja
    }
}

export { AutenticadaLjService }