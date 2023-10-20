import prismaClient from "../../prisma";

interface StoreRequest {
    regionID: string;
}

class ListaLojasService {
    async execute({ regionID }: StoreRequest) {
        const today = new Date().toLocaleDateString();

        const select = {
            product: true,
            id: true,
            name: true,
            avatar: true,
            delivery: true,
            userID: true,
        }

        const isMonthlyPaymentRegion = regionID === "cb9085c6-439b-48da-8bc4-17ecd2800d4a";
        return await prismaClient.store.findMany({
            where: {
                user: {
                    regionID: regionID,
                    // payment: isMonthlyPaymentRegion ? { some: { expiration: { gt: today } } } : undefined
                }
            },
            select: select
        })

    }
}

export { ListaLojasService }