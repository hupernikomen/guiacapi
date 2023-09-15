import prismaClient from "../../prisma";

interface subCategoriaRequest {
    name: string,
    categoryID: string
}

class CriaSubCategoriaService {
    async execute({
        name,
        categoryID
    }: subCategoriaRequest) {

        const _subcategory = await prismaClient.subcategory.findFirst({ where: { name, categoryID } })
        if (_subcategory)  throw new Error("subCategoria já existe");

        const __subcategory = await prismaClient.subcategory.create({
            data: {
                name,
                categoryID
            }
        })

        return __subcategory
    }
}

export { CriaSubCategoriaService }