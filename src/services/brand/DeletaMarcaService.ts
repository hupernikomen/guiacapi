import prismaClient from "../../prisma";

interface marcaRequest {
  brandID: string,
}

class DeletaMarcaService {

  async execute({
    brandID
  }: marcaRequest) {

    const _brand = await prismaClient.brand.findUnique({ where: { id: brandID }  })

    if (!_brand) throw new Error("Marca não existe");

    const __brand = await prismaClient.brand.delete({
      where: { id: brandID }
    })

    return __brand

  }
}

export { DeletaMarcaService }