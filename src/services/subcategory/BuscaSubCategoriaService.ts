import prismaClient from "../../prisma";

interface subcategoriaRequest {
  subcategoryID: string
}

class BuscaSubcategoriaService {
  async execute({  subcategoryID }: subcategoriaRequest) {

    const _subcategory = await prismaClient.subcategory.findUnique({
      where: { id: subcategoryID }
    })

    return _subcategory
  }
}

export { BuscaSubcategoriaService }