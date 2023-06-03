import prismaClient from "../../prisma"

interface productRequest {
    nome: string,
    descricao: string,
    preco: string,
    oferta: string,
    tamanho: string,
    categoriaID: string,
    campanhaID: string,    
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
        campanhaID,
        produtoID

    }: productRequest) {

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
                campanhaID,
            },
        })

        return produto

    }
}

export { AtualizaPdtService }