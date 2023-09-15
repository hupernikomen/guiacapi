import prismaClient from "../../prisma";

interface lojaRequest {
  userID: string,
}

class CriaLojaService {

  async execute({ userID }: lojaRequest) {

    const _store = await prismaClient.store.create({ data: { userID } })
    return _store
  }
}

export { CriaLojaService }