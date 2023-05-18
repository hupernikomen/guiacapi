import prismaClient from "../../prisma";

interface subcategoriaRequest {
    nome: string,
    categoriaID: string
}

class CriarSubCategoriaService {
    async execute({
        nome,
        categoriaID
    }: subcategoriaRequest) {

        const subcategoriaExiste = await prismaClient.subCategoria.findFirst({
            where: {
                nome
            }
        })

        if (subcategoriaExiste) {
            throw new Error("Subcategoria já existe");
            
        }

        const subcategoria = await prismaClient.subCategoria.create({
            data: {
                nome,
                categoriaID
            }
        })

        return subcategoria
    }
}

export { CriarSubCategoriaService }