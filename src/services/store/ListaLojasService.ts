import prismaClient from "../../prisma";

class ListaLojasService {
    async execute() {

        const _store = await prismaClient.store.findMany({
            where: { user: { status: true } },
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