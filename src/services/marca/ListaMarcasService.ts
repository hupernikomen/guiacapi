import prismaClient from "../../prisma";

class ListaMarcasService {
  async execute() {

    const marcas = await prismaClient.marca.findMany()
    return marcas
  }
}

export { ListaMarcasService }