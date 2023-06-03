import prismaClient from "../../prisma";

class ListaLjService {
    async execute() {

        const loja = await prismaClient.loja.findMany({
            where: {
                statusGuia: true,
                // regiao:{
                //     nome: "Dirceu" // Logica de alteração de REGIAO no FrontEnd
                // }
            },
            select: {
                id: true,
                statusGuia: true,
                nome:true,
                avatar:true,
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
                bio:true,
                endereco:true,
                entrega:true,
                latlng:true,
                bairro:true,
                referencia:true,

            }
        })

        return loja
    }
}

export { ListaLjService }