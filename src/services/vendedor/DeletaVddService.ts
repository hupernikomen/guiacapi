import prismaClient from "../../prisma";

interface DeleteVendedorRequest {
    vendedorID: string
}

class DeletaVddService {

    async execute({
        vendedorID
    }: DeleteVendedorRequest) {

        const vendedor = await prismaClient.vendedor.findUnique({
            where: {
                id: vendedorID
            }
        })

        if(!vendedor) {
            throw new Error("Vendedor não existe");
        }

        const vendedorDelete = await prismaClient.vendedor.delete({
            where: {
                id: vendedorID
            }
        })

        return vendedorDelete

    }
}

export { DeletaVddService  }