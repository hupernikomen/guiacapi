// import prismaClient from '../../prisma';
// import 'dotenv/config';
// interface PersonRquest {
//   regionID: string;
// }
// class ListarProfissionalService {
//   async execute({ regionID }: PersonRquest) {
//     return await prismaClient.person.findMany({
//       where: {
//         user: {
//           payment: { some: { status: 'On' } },
//           regionID
//         }
//       },
//       select: {
//         type: true,
//         id: true,
//         avatar: true,
//         name: true,
//         bio: true,
//         professionID: true,
//         user: { select: { payment: true } },
//         profession: { select: { name: true } },
//         userID: true
//       }
//     });
//   }
// }
// export { ListarProfissionalService };
