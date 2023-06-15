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

        produto.imagens?.forEach((item: any) => {
            console.log(item,"DeletaPdt API");
            var params = { Bucket: 'guiaapi-s3bucket', Key: 'public/569992bf0546a1bcbc0125d7dad134f3-54ef6968-f274-4cf8-9a97-d5a065e3c261.JPEG' };
            s3.deleteObject(params, function (err, data) {
                if (err) console.log(err, err.stack);  // error
                else console.log();                 // deleted
            })
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