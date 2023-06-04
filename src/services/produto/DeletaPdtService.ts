import prismaClient from "../../prisma";

interface DeleteProdutoRequest {
    produtoID: string,
}

class DeletaPdtService {

    async execute({
        produtoID
    }: DeleteProdutoRequest) {

        const produto = await prismaClient.produto.findUnique({
            where: {
                id: produtoID
            }
        })

        produto.imagens.forEach((item) => {
            console.log(item, "DeletaPdt API");
            
        })

        if(!produto) {
            throw new Error("Produto não existe");
        }

        const produtoDelete = await prismaClient.produto.delete({
            where: {
                id: produtoID
            }
        })

        return produtoDelete

    }
}

export { DeletaPdtService  }