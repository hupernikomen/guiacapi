import prismaClient from "../../prisma";

interface postoRequest {
  userID: string,
}

class CriaPostoService {

  async execute({ userID }: postoRequest) {

    const _gasStation = await prismaClient.gasStation.findFirst({ where: { userID } })
    if (_gasStation) throw new Error("Posto já cadastrado!");

    const __gasStation = await prismaClient.gasStation.create({ data: { userID } })
    return __gasStation
  }
}

export { CriaPostoService }