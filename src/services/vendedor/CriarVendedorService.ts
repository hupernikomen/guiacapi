import prismaClient from "../../prisma";

interface vendedorRequest {
    nome: string,
    whatsapp: string,
    foto: object,
    lojaID:string
}

class CriarVendedorService {
    async execute({
        nome,
        whatsapp,
        foto,
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
                foto,
                lojaID
            }
        })

        return vendedor
    }
}

export { CriarVendedorService }