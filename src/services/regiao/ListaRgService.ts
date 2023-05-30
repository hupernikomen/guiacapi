import prismaClient from "../../prisma";

class ListaRgService {
    async execute() {

        const regiao = await prismaClient.regiao.findMany({
            select:{
                id: true,
                nome: true,
                
            }
        })

        return regiao
    }
}

export { ListaRgService }