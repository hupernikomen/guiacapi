import prismaClient from "../../prisma";
import 'dotenv/config';

class ListaLojasService {
    async execute() {

        return await prismaClient.store.findMany({
            where: { user: { payment: { some: { status: "Aprovado" } } } },
            select: {
                product: true,
                id: true,
                name: true,
                avatar: true,
                delivery: true,
                user: { select: { payment: { select: { status: true, value: true, expiration: true, createdAt: true } }, } },
                userID: true,
            }
        })
    }
}

export { ListaLojasService }