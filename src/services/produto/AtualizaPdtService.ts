import prismaClient from "../../prisma"

interface productRequest {
    nome: string,
    descricao: string,
    preco: string,
    oferta: string,
    tamanho: string,
    categoriaID: string,
    produtoID: string,
}

class AtualizaPdtService {
    async execute({
        nome,
        descricao,
        preco,
        oferta,
        tamanho,
        categoriaID,
        produtoID

    }: productRequest) {

        const today = new Date()

        const produto = await prismaClient.produto.update({
            where: {
                id: produtoID
            },
            data: {
                nome,
                descricao,
                preco,
                oferta,
                tamanho,
                categoriaID,
                updatedAt: today
            }
        })

        return produto

    }
}

export { AtualizaPdtService }