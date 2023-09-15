import prismaClient from "../../prisma";

interface categoriaRequest {
    name: string
}

class CriaCategoriaService {
    async execute({ name }: categoriaRequest) {

        const _category = await prismaClient.category.findFirst({ where: { name } })
        if (_category) throw new Error("Categoria já existe");

        const __category = await prismaClient.category.create({ data: { name } })
        return __category
    }
}

export { CriaCategoriaService }