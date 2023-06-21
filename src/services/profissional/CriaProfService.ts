import prismaClient from "../../prisma";

interface profissionalRequest {
  nome: string,
  avatar: object,
  portfolio: object,
  listaServicos: string,
  whatsapp: string,
  email: string,
  aDomicilio: boolean,
  endereco: string,
  bio: string,
  statusGuia: boolean,
  regiaoID: string,
  servicoID: string
}

class CriaProfService {

  async execute({

    nome,
    avatar,
    portfolio,
    listaServicos,
    whatsapp,
    email,
    aDomicilio,
    endereco,
    bio,
    statusGuia,
    regiaoID,
    servicoID


  }: profissionalRequest) {

    const servico = await prismaClient.profissional.create({
      data: {

        nome,
        avatar,
        portfolio,
        listaServicos,
        whatsapp,
        email,
        aDomicilio,
        endereco,
        bio,
        statusGuia,
        regiaoID,
        servicoID
      }
    })

    return servico
  }
}

export { CriaProfService }