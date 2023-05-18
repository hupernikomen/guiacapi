import prismaClient from "../../prisma";

interface categoriaRequest{
    categoriaID: string
}

class ListarSubCategoriasService {
    async execute({
        categoriaID
    }: categoriaRequest) {

        const subcategoria = await prismaClient.subCategoria.findMany({
            where:{
                categoriaID
            },
            select: {
                id: true,
                nome: true,
                
            }
        })

        return subcategoria
    }
}

export { ListarSubCategoriasService }