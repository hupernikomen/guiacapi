import prismaClient from "../../prisma";

interface regionRequest {
    name: string
}

class CriaRegiaoService {
    async execute({ name }: regionRequest) {

        const _region = await prismaClient.region.findFirst({ where: { name } })
        if (_region)  throw new Error("Região já existe");

        const __region = await prismaClient.region.create({ data: { name } })
        return __region
    }
}

export { CriaRegiaoService }