import prismaClient from "../../prisma";

class MeLojaService {
    async execute(loja_ID: string) {
        const loja = await prismaClient.loja.findFirst({
            where:{
                id: loja_ID
            },
            select: {
                id: true,
                nome: true,
                latlng:true,
                bio: true,
                ativo: true,
                produtos: true,
                whatsapp: true,
                logo: true,
                endereco:true,
                entrega:true,
                regiao:{
                    select:{
                        nome:true,
                    }
                },

            }
        })

        return loja
    }
}

export { MeLojaService }