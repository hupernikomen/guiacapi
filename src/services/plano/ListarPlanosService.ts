import prismaClient from "../../prisma";

class ListarPlanosService {
    async execute() {

        const planos = await prismaClient.plano.findMany()

        return planos
    }
}

export { ListarPlanosService }