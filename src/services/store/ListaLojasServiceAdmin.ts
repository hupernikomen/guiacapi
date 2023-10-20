import prismaClient from "../../prisma";

class ListaLojasServiceAdmin {
    async execute() {

        return await prismaClient.store.findMany({
            select: {
                product: true,
                id: true,
                name: true,
                avatar: true,
                delivery: true,
                userID: true,
            }
        })

    }
}

export { ListaLojasServiceAdmin }