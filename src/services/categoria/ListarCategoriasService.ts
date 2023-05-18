import prismaClient from "../../prisma";

class ListarCategoriasService {
    async execute() {

        const categoria = await prismaClient.categoria.findMany({
            select: {
                id: true,
                nome: true,
                subcategoria:{
                    select:{
                        id: true,
                        nome: true
                    }
                },
                _count:true
            }
        })

        return categoria
    }
}

export { ListarCategoriasService }