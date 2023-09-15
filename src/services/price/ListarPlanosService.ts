import prismaClient from "../../prisma";

class ListarPlanosService {
    async execute() {

        const _price = await prismaClient.price.findMany({
            select:{
                id:true,
                name:true,
                advantage:true,
                off:true,
                price:true
            }
        })

        return _price
    }
}

export { ListarPlanosService }