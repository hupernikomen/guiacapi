import prismaClient from "../../prisma";

interface vendedorRequest {
    avatar:object,
    nome: string,
    whatsapp: string,
    setor: string,
    lojaID:string
}

class CriaVddService {
    async execute({
        avatar,
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
                avatar,
                nome,
                whatsapp,
                setor,
                lojaID
            }
        })

        return vendedor
    }
}

export { CriaVddService }