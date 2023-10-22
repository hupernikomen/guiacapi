import prismaClient from "../../prisma";

interface RegionRequest {
  regionID: string
}

class ListaMarcasService {
  async execute({ regionID }: RegionRequest) {

    const _brand = await prismaClient.brand.findMany({
      where: {
        user: {regionID: regionID }

      }
    })
    return _brand
  }
}

export { ListaMarcasService }