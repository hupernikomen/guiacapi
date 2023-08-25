import prismaClient from "../../prisma";

interface marcaRequest {
  marcaID: string,
}

class DeletaMarcaService {

  async execute({
    marcaID
  }: marcaRequest) {

    const marca = await prismaClient.marca.findUnique({
      where: {
        id: marcaID
      }
    })

    if (!marca) throw new Error("Marca não existe");

    const marcaDelete = await prismaClient.marca.delete({
      where: {
        id: marcaID
      }
    })

    return marcaDelete

  }
}

export { DeletaMarcaService }