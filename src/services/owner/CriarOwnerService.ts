import prismaClient from "../../prisma";

interface ownerRequest {
  name:string,
  whatsapp:string,
  userID: string
}

class CriarOwnerService {

  async execute({
    name,
    whatsapp,
    userID

  }: ownerRequest) {

    const _payment = await prismaClient.owner.create({
      data: {
        name,
        whatsapp,
        userID
      }
    })

    return _payment
  }
}

export { CriarOwnerService }