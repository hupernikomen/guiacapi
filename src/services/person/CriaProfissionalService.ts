import prismaClient from "../../prisma";

interface profissionalRequest {
  userID: string,
  professionID:string
}

class CriaProfissionalService {

  async execute({

    userID,
    professionID

  }: profissionalRequest) {

    const _person = await prismaClient.person.create({
      data: {
        userID,
        professionID
      }
    })

    return _person
  }
}

export { CriaProfissionalService }