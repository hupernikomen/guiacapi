import prismaClient from "../../prisma";

interface categoryServiceRequest {
    name: string
}

class CreateCategoryServiceService {
    async execute({ name }: categoryServiceRequest) {

        const _categoryService = await prismaClient.categoryService.findFirst({ where: { name } })
        if (_categoryService) throw new Error("Categoria já existe");

        const __categoryService = await prismaClient.categoryService.create({ data: { name } })
        return __categoryService
    }
}

export { CreateCategoryServiceService}