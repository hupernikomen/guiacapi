import prismaClient from "../../prisma";

interface DeleteSubCategoriaRequest {
    subcategoriaID: string
}

class DeletarSubCategoriaService {

    async execute({
        subcategoriaID
    }: DeleteSubCategoriaRequest) {

        const subCategoria = await prismaClient.subCategoria.findUnique({
            where: {
                id: subcategoriaID
            }
        })

        if(!subCategoria) {
            throw new Error("Produto não existe");
        }

        const subCategoriaDelete = await prismaClient.subCategoria.delete({
            where: {
                id: subcategoriaID
            }
        })

        return subCategoriaDelete

    }
}

export { DeletarSubCategoriaService  }