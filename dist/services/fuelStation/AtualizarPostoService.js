// import prismaClient from "../../prisma";
// interface postoRequest {
//     name: string,
//     avatar: object,
//     table: object,
//     district: string,
//     fuelStationID: string
// }
// class AtualizaPostoService {
//     async execute({
//         name,
//         avatar,
//         table,
//         district,
//         fuelStationID
//     }: postoRequest) {
//         const _fuelStationID = await prismaClient.fuelStation.findFirst({ where: { id: fuelStationID } })
//         const __fuelStationID = await prismaClient.fuelStation.updateMany({
//             where: { id: fuelStationID },
//             data: {
//                 name,
//                 avatar,
//                 table,
//                 previoustable: _fuelStationID.table,
//                 district,
//                 updatedAt: new Date()
//             }
//         })
//         return __fuelStationID
//     }
// }
// export { AtualizaPostoService }
