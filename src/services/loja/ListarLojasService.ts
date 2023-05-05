import prismaClient from "../../prisma";

class ListarLojasService {
    async execute() {

        const loja = await prismaClient.loja.findMany({
            where: {
                ativo: true,
                // regiao:{
                //     nome: "Dirceu" // Logica de alteração de REGIAO no FrontEnd
                // }
            },
            select: {
                id: true,
                nome:true,
                logo:true,
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
                whatsapp:true,
                createdAt:true,
                bairro:true,
                referencia:true,

            }
        })

        return loja
    }
}

export { ListarLojasService }