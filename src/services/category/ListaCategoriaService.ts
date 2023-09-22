import prismaClient from "../../prisma";

interface CategoryRequest {
    regionID: string
}

class ListaCategoriaService {
    async execute({ regionID }: CategoryRequest) {

        const _category = await prismaClient.category.findMany({
            where: {
                product: { every: { store: { user: { regionID: regionID } } } }
            },
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