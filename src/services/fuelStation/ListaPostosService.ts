// import prismaClient from "../../prisma";

// class ListaPostosService {
//   async execute() {

//     const _fuelStation = await prismaClient.fuelStation.findMany({
//       select: {
//         id: true,
//         name: true,
//         avatar: true,
//         table: true,
//         previoustable:true,
//         district: true,
//         userID: true,
//         user: {
//           select: {
//             map: true
//           }
//         },
//         updatedAt:true

//       }
//     })

//     return _fuelStation
//   }
// }

// export { ListaPostosService }
