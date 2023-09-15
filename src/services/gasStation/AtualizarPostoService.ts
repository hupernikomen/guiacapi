import prismaClient from "../../prisma";

interface postoRequest {
    name: string,
    avatar: object,
    table: object,
    district: string,
    gasStationID: string
}

class AtualizaPostoService {

    async execute({
        name,
        avatar,
        table,
        district,
        gasStationID
    }: postoRequest) {

        const _gasStationID = await prismaClient.gasStation.findFirst({ where: { id: gasStationID } })

        const __gasStationID = await prismaClient.gasStation.updateMany({
            where: { id: gasStationID },
            data: {
                name,
                avatar,
                table,
                previoustable: _gasStationID.table,
                district,
                updatedAt: new Date()
            }
        })

        return __gasStationID
    }
}

export { AtualizaPostoService }