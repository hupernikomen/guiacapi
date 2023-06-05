import prismaClient from "../../prisma";
import AWS from 'aws-sdk';

let s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1',
});

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

        produto.imagens?.forEach((item:any) => {

            const params=item
            // console.log(item, "DeletaPdt API");
            s3.deleteObject(params,()=>{})
        })

        if (!produto) {
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

export { DeletaPdtService }