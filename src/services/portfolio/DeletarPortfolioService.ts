import prismaClient from "../../prisma";
import AWS from 'aws-sdk';

let s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: 'us-east-1',
});

interface DeletePortfolioRequest {
  portfolioID: string,
}

class DeletaPortfolioService {

  async execute({
    portfolioID
  }: DeletePortfolioRequest) {

    const portfolio = await prismaClient.portfolio.findUnique({
      where: {
        id: portfolioID
      }
    })


    if (!portfolio) {
      throw new Error("Produto não existe");
    }


    
    // Apagar imagens do S3 da Amazon
    // var params = { Bucket: process.env.BUCKETEER_BUCKET_NAME, Key:portfolio?.image.key };
    // s3.deleteObject(params, function (err, data) {
    //   if (err) console.log(err, err.stack);  // error
    //   else console.log();                 // deleted
    // })


    const portfolioDelete = await prismaClient.portfolio.delete({
      where: {
        id: portfolioID
      }
    })

    return portfolioDelete

  }
}

export { DeletaPortfolioService }