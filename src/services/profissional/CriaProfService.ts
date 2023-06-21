import prismaClient from "../../prisma";

interface profissionalRequest {
  nome: string,
  avatar: object,
  listaServicos: string,
  whatsapp: string,
  email: string,
  endereco: string,
  regiaoID: string,
  servicoID: string
}

class CriaProfService {

  async execute({

    nome,
    avatar,
    listaServicos,
    whatsapp,
    email,
    endereco,
    regiaoID,
    servicoID


  }: profissionalRequest) {

    const servico = await prismaClient.profissional.create({
      data: {

        nome,
        avatar,
        listaServicos,
        whatsapp,
        email,
        endereco,
        regiaoID,
        servicoID
      }
    })

    return servico
  }
}

export { CriaProfService }