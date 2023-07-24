import prismaClient from "../../prisma";
import AWS from 'aws-sdk';

let s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: 'us-east-1',
});

interface DeleteContatoRequest {
  contatoID: string,
}

class DeletaContatoService {

  async execute({
    contatoID
  }: DeleteContatoRequest) {

    const imagem = await prismaClient.contato.findUnique({
      where: {
        id: contatoID
      }
    })


    // Apagar imagens do S3 da Amazon
    // var params = { Bucket: process.env.BUCKETEER_BUCKET_NAME, Key: imagem.imagem[0].key };
    // s3.deleteObject(params, function (err, data) {
    //   if (err) console.log(err, err.stack);  // error
    //   else console.log();                 // deleted
    // })

    if (!imagem) {
      throw new Error("Contato não existe");
    }

    const contatoDelete = await prismaClient.contato.delete({
      where: {
        id: contatoID
      }
    })

    return contatoDelete

  }
}

export { DeletaContatoService }