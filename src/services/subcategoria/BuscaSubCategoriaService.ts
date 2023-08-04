import prismaClient from "../../prisma";

interface subcategoriaRequest {
  subcategoriaID: string
}


class BuscaSubcategoriaService {
  async execute({
    subcategoriaID
  }: subcategoriaRequest) {

    const subcategoria = await prismaClient.subCategoria.findUnique({
      where: {
        id: subcategoriaID,
      }
    })



    return subcategoria
  }
}

export { BuscaSubcategoriaService }