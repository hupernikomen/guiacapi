import prismaClient from "../../prisma";

class ListaPostosService {
  async execute() {

    const _gasStation = await prismaClient.gasStation.findMany({
      where: {
        user: {
          status: true
        }
      },
      select: {
        id: true,
        name: true,
        avatar: true,
        table: true,
        previoustable:true,
        district: true,
        userID: true,
        user: {
          select: {
            map: true
          }
        },
        updatedAt:true

      }
    })

    return _gasStation
  }
}

export { ListaPostosService }