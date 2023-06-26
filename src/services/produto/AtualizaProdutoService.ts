import prismaClient from "../../prisma"

interface produtoRequest {
    nome: string,
    descricao: string,
    preco: number,
    oferta: number,
    tamanho: string,
    categoriaID: string,
    campanhaID: string,    
    produtoID: string,
}

class AtualizaProdutoService {
    async execute({
        nome,
        descricao,
        preco,
        oferta,
        tamanho,
        categoriaID,
        campanhaID,
        produtoID

    }: produtoRequest) {

        const produto = await prismaClient.produto.updateMany({
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
                campanhaID: oferta != 0 ? campanhaID : null,
            },
        })

        return produto

    }
}

export { AtualizaProdutoService }