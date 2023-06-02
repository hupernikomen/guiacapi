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
                campanhaID,
            },
            select:{
                nome:true,
                descricao:true,
                preco:true,
                oferta:true,
                campanha:{
                    select:{
                        id:true,
                        nome:true
                    }
                },
                tamanho:true
            }
        })

        return produto

    }
}

export { AtualizaPdtService }