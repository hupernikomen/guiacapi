import prismaClient from "../../prisma";

class ListaCategoriaService {
    async execute() {

        const _category = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true,
                subcategory: { select: { name: true, _count: true } },
                _count: true,
            }
        })

        return _category
    }
}

export { ListaCategoriaService }