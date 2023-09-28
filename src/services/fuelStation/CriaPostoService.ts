import prismaClient from "../../prisma";

interface postoRequest {
  userID: string,
}

class CriaPostoService {

  async execute({ userID }: postoRequest) {

    const _fuelStation = await prismaClient.fuelStation.findFirst({ where: { userID } })
    if (_fuelStation) throw new Error("Posto já cadastrado!");

    const __fuelStation = await prismaClient.fuelStation.create({ data: { userID } })
    return __fuelStation
  }
}

export { CriaPostoService }