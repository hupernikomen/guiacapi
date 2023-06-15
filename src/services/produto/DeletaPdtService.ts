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

        // produto.imagens?.forEach((item: any) => {
        var params = { Bucket: 'guiaapi-s3bucket', Key: 'public/42d5b2ea6584a6f96acc245caf9a1e82-598935c3-cc1f-4364-9d11-4e94ada3233d.JPEG' };
        s3.deleteObject(params, function (err, data) {
            if (err) console.log(err, err.stack);  // error
            else console.log();                 // deleted
            console.log("DeletaPdt API");
        })
        // })

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