import prismaClient from "../../prisma";

class ListaCategoriaService {
    async execute() {

        const categoria = await prismaClient.categoria.findMany({
            select: {
                id: true,
                nome: true,
                _count: true,
                subCategoria: {
                    select: { nome: true, _count:true }
                },
                produto:{
                    select:{
                        loja:{
                            select:{
                                usuario:{
                                    select:{
                                        status:true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })

        return categoria
    }
}

export { ListaCategoriaService }