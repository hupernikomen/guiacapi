import prismaClient from "../../prisma";

interface vendedorRequest {
    nome: string,
    whatsapp: string,
    setor: string,
    lojaID:string
}

class CriarVendedorService {
    async execute({
        nome,
        whatsapp,
        setor,
        lojaID
    }: vendedorRequest) {

        const vendedorExiste = await prismaClient.vendedor.findFirst({
            where: {
                whatsapp
            }
        })

        if (vendedorExiste) {
            throw new Error("Vendedor já cadastrado");
            
        }

        const vendedor = await prismaClient.vendedor.create({
            data: {
                nome,
                whatsapp,
                setor,
                lojaID
            }
        })

        return vendedor
    }
}

export { CriarVendedorService }