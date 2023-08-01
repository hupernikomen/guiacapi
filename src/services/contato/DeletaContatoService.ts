import prismaClient from "../../prisma";

interface DeleteContatoRequest {
  contatoID: string,
}

class DeletaContatoService {

  async execute({
    contatoID
  }: DeleteContatoRequest) {

    const contato = await prismaClient.contato.findUnique({
      where: {
        id: contatoID
      }
    })

    if (!contato) throw new Error("Contato não existe");

    const contatoDelete = await prismaClient.contato.delete({
      where: {
        id: contatoID
      }
    })

    return contatoDelete

  }
}

export { DeletaContatoService }