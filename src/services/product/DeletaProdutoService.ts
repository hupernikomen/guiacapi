import prismaClient from "../../prisma";
import AWS from 'aws-sdk';

let s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1',
});

interface DeleteProdutoRequest {
    productID: string,
}

class DeletaProdutoService {

    async execute({ productID }: DeleteProdutoRequest) {

        const _product = await prismaClient.product.findUnique({ where: { id: productID } })
        if (!_product) throw new Error("Produto não existe");

        // Apagar imagens do S3 da Amazon
        // _product.image?.forEach((item: any) => {
        //     var params = { Bucket: process.env.BUCKETEER_BUCKET_NAME, Key: item.key };
        //     s3.deleteObject(params, function (err, data) {
        //         if (err) console.log(err, err.stack);  // error
        //         else console.log();                 // deleted
        //     })
        // })

        const __product = await prismaClient.product.delete({ where: { id: productID } })
        return __product

    }
}

export { DeletaProdutoService }