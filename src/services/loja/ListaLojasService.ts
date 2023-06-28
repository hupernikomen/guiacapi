import prismaClient from "../../prisma";

/**
 * Mostra todas as lojas na tela do app
 * deverá ser usada na pagina para mostrar todas as lojas ativas
 */

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
                usuarioID:true
            }
        })

        return loja
    }
}

export { ListaLojasService }