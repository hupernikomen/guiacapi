import prismaClient from "../../prisma"
import AWS from 'aws-sdk';

let s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1',
});

interface lojaDataRequest {
    lojaID: string,
    statusGuia: boolean,
    avatar: object,
    nome: string,
    bio: string,
    endereco: string,
    bairro: string,
    referencia: string,
    latlng: object,
    entrega: boolean
}

class AtualizaLjService {
    async execute({
        lojaID,
        statusGuia,
        avatar,
        nome,
        bio,
        endereco,
        bairro,
        referencia,
        latlng,
        entrega

    }: lojaDataRequest) {

        const loja = await prismaClient.loja.findUnique({
            where: {
                id: lojaID
            }
        })

        if (!loja) {
            throw new Error("Ops, infelizmente não encontramos!");

        }

        console.log(loja, "lojaaaaaaaaaa")
          // Apagar imagens do S3 da Amazon
            // var params = { Bucket: process.env.BUCKETEER_BUCKET_NAME, Key: loja.avatar?.key };
            // s3.deleteObject(params, function (err, data) {
            //     if (err) console.log(err, err.stack);  // error
            //     else console.log();                 // deleted
            // })


        const data = await prismaClient.loja.update({
            where: {
                id: lojaID
            },
            data: {
                statusGuia,
                nome,
                avatar,
                bio,
                endereco,
                bairro,
                referencia,
                latlng,
                entrega
            }
        })

        return data

    }
}

export { AtualizaLjService }