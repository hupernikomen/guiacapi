import prismaClient from "../../prisma";

interface StoreRequest {
    regionID: string;
}

class ListaLojasService {
    async execute({ regionID }: StoreRequest) {

        const _store = await prismaClient.store.findMany({
            where: { user: { status: true, regionID: regionID } },
            select: {
                product: true,
                id: true,
                name: true,
                avatar: true,
                delivery: true,
                userID: true,
            }
        })

        return _store
    }
}

export { ListaLojasService }