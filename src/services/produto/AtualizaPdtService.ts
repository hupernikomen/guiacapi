import prismaClient from "../../prisma"

interface productRequest {
    nome: string,
    descricao: string,
    preco: number,
    oferta: number,
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
                campanhaID: oferta != null ? campanhaID : null,
            },
        })

        return produto

    }
}

export { AtualizaPdtService }