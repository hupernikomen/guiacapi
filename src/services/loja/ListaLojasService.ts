import prismaClient from "../../prisma";


class ListaLojasService {
    async execute() {

        const loja = await prismaClient.loja.findMany({
            where:{
                usuario:{
                    status: true
                }
            },
            select:{
                produtos:true,
                id:true,
                nome:true,
                avatar:true,
                delivery:true,
                usuarioID:true,
            }
        })

        return loja
    }
}

export { ListaLojasService }