import prismaClient from "../../prisma";

interface ownerRequest {
  name:string,
  whatsapp:string,
}

class CriarOwnerService {

  async execute({
    name,
    whatsapp,

  }: ownerRequest) {

    const _payment = await prismaClient.owner.create({
      data: {
        name,
        whatsapp,
      }
    })

    return _payment
  }
}

export { CriarOwnerService }