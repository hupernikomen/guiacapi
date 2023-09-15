import prismaClient from "../../prisma";

class ListaMarcasService {
  async execute() {

    const _brand = await prismaClient.brand.findMany()
    return _brand
  }
}

export { ListaMarcasService }