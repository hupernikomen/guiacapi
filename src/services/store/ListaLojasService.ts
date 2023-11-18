import prismaClient from "../../prisma";
import 'dotenv/config';

interface StoreRequest {
    regionID: string;
}

class ListaLojasService {
    async execute({ regionID }: StoreRequest) {

        const today = new Date().toLocaleDateString('pt-BR');
        const regionQuery = regionID === process.env.TERESINAID ? { user: { payment: { every: { expiration: { gte: today } } } } } : { user: { payment: { every: { expiration: { gte: today } } }, regionID: regionID } };

        return await prismaClient.store.findMany({
            where: regionQuery,
            select: {
                product: true,
                id: true,
                name: true,
                avatar: true,
                delivery: true,
                user: { select: { payment: true } },
                userID: true,
            }
        })

    }
}

export { ListaLojasService }