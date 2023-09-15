import prismaClient from "../../prisma";

interface planoRequest {
  name: string,
  price: string,
  off: string,
  advantage: string
}

class CriaPlanoService {

  async execute({
    name,
    price,
    off,
    advantage

  }: planoRequest) {

    const planoExiste = await prismaClient.price.findFirst({
      where: {
        name
      }
    })

    if (planoExiste) {
      throw new Error("Plano já cadastrado!");
    }

    const plano = await prismaClient.price.create({
      data: {
        name,
        price,
        off,
        advantage
      }
    })

    return plano
  }
}

export { CriaPlanoService }