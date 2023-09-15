import prismaClient from "../../prisma";

interface categoriaRequest {
    name: string,
    categoryID: string
}

class AtualizaCategoriaService {

    async execute({ name, categoryID }: categoriaRequest) {

        const _category = await prismaClient.category.update({
            where: { id: categoryID },
            data: { name }
        })

        return _category
    }
}

export { AtualizaCategoriaService }