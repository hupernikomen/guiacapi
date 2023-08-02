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
          
        })



        return subcatgoria
    }
}

export { ListaSubCategoriasService }