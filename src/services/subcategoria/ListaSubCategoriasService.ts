import prismaClient from "../../prisma";

interface listaSubCategoriaRequest {
    categoriaID: string
}


class ListaSubCategoriasService {
    async execute({
        categoriaID
    }: listaSubCategoriaRequest) {

        const subcatgoria = await prismaClient.subCategoria.findMany({
            where: {
                categoriaID,
            },
            select: {
                id: true,
                nome: true,
                _count:true,
                categoria: {
                    select:{
                        nome:true
                    }
                }
            }
          
        })



        return subcatgoria
    }
}

export { ListaSubCategoriasService }