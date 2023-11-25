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
        const deletePromises = []
        let tempArray = []
        if (_product.image && Array.isArray(_product.image)) {
            tempArray = _product.image.map((item: any) => {
                var params = { Bucket: process.env.BUCKETEER_BUCKET_NAME, Key: item.key };
                return s3.deleteObject(params).promise();
            });
        }
    
        deletePromises.push(...tempArray)
    
        await Promise.all(deletePromises);
    
        const __product = await prismaClient.product.delete({ where: { id: productID } })
        return __product
    
    }
}

export { DeletaProdutoService }