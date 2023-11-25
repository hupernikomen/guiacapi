import prismaClient from "../../prisma"

import AWS from 'aws-sdk';

let s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1',
});

interface lojaDataRequest {
    userID: string,
    avatar: object,
    name: string,
    bio: string,
    address: string,
    district: string,
    reference: string,
    delivery: boolean,
}

class AtualizaLojaService {
    async execute({
        userID,
        avatar,
        name,
        bio,
        address,
        district,
        reference,
        delivery,

    }: lojaDataRequest) {

        const _store = await prismaClient.store.findFirst({ where: { userID } })

        if (!_store) throw new Error("Ops, infelizmente não encontramos!");



        const deletePromises = []
        let tempArray = []
        if (_store.avatar && Array.isArray(_store.avatar)) {
            tempArray = _store.avatar.map((item: any) => {
                var params = { Bucket: process.env.BUCKETEER_BUCKET_NAME, Key: item.key };
                return s3.deleteObject(params).promise();
            });
        }

        deletePromises.push(...tempArray)
    
        await Promise.all(deletePromises);


        const __store = await prismaClient.store.updateMany({
            where: { userID },
            data: {
                name,
                avatar,
                bio,
                address,
                district,
                reference,
                delivery,
            },
        })

        return __store

    }
}

export { AtualizaLojaService }