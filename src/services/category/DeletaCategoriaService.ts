import prismaClient from "../../prisma";

interface DeleteCategoriaRequest {
    categoryID: string
}

class DeletaCategoriaService {

    async execute({ categoryID }: DeleteCategoriaRequest) {

        const _category = await prismaClient.category.findFirst({ where: { id: categoryID } })
        if(!_category) throw new Error("Categoria não existe");
        
        const __category = await prismaClient.category.delete({ where: { id: categoryID } })
        return __category

    }
}

export { DeletaCategoriaService  }