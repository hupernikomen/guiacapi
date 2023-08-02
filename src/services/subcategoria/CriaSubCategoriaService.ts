import prismaClient from "../../prisma";

interface subCategoriaRequest {
    nome: string,
    categoriaID: string
}

class CriaSubCategoriaService {
    async execute({
        nome,
        categoriaID
    }: subCategoriaRequest) {

        const subCategoriaExiste = await prismaClient.subCategoria.findFirst({
            where: {
                nome
            }
        })

        if (subCategoriaExiste) {
            throw new Error("subCategoria já existe");
            
        }

        const subCategoria = await prismaClient.subCategoria.create({
            data: {
                nome,
                categoriaID
            }
        })

        return subCategoria
    }
}

export { CriaSubCategoriaService }