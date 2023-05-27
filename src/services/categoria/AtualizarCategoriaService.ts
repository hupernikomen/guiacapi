import prismaClient from "../../prisma";

interface categoriaRequest {
    nome: string,
    categoriaID:string
}

class AtualizarCategoriaService {

    async execute({
        nome,
        categoriaID
    }: categoriaRequest) {

        const categoria = await prismaClient.categoria.update({
            where:{
                id:categoriaID
            },
            data: {
                nome,
            }
        })

        return categoria
    }
}

export { AtualizarCategoriaService  }