import prismaClient from "../../prisma";

interface postoRequest {
  userID: string
}


class BuscaPostoService {
  async execute({
    userID
  }: postoRequest) {

    const _fuelStationID = await prismaClient.fuelStation.findFirst({

      where: {
        user: {
          id: userID,
          status: true
        }

      },
      select: {
        userID: true,
        id: true,
        name: true,
        table: true,
        previoustable:true,
        avatar: true,
        district: true,
        updatedAt:true
      }
    })



    return _fuelStationID
  }
}

export { BuscaPostoService }