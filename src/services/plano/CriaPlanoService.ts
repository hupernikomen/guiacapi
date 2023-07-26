import prismaClient from "../../prisma";

interface planoRequest {
  nome: string,
  valor: string,
  oferta: string,
  pacote: string
}

class CriaPlanoService {

  async execute({
    nome,
    valor,
    oferta,
    pacote

  }: planoRequest) {

    const planoExiste = await prismaClient.plano.findFirst({
      where: {
        nome
      }
    })

    if (planoExiste) {
      throw new Error("Plano já cadastrado!");
    }

    const plano = await prismaClient.plano.create({
      data: {
        nome,
        valor,
        oferta,
        pacote
      }
    })

    return plano
  }
}

export { CriaPlanoService }