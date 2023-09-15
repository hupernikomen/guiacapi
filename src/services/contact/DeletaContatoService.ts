import prismaClient from "../../prisma";

interface DeleteContatoRequest {
  contactID: string,
}

class DeletaContatoService {

  async execute({
    contactID
  }: DeleteContatoRequest) {

    const _contact = await prismaClient.contact.findUnique({ where: { id: contactID } })
    if (!_contact) throw new Error("Contato não existe");

    const __contact = await prismaClient.contact.delete({ where: { id: contactID } })
    return __contact

  }
}

export { DeletaContatoService }