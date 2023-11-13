import prismaClient from "../../prisma";

interface DeleteRegiaoRequest {
    regionID: string
}

class DeletaRegiaoService {

    async execute({ regionID }: DeleteRegiaoRequest) {

        const _region = await prismaClient.region.findFirst({ where: { id: regionID } })
        if (!_region) throw new Error("Categoria não existe");

        const __region = await prismaClient.region.delete({ where: { id: regionID } })
        return __region

    }
}

export { DeletaRegiaoService }