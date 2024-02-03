// import prismaClient from "../../prisma";
// interface profissionalRequest {
//     personID: string
// }
// class BuscaProfissionalService {
//     async execute({ personID }: profissionalRequest) {
//         const _person = await prismaClient.person.findUnique({
//             where: { id: personID },
//             select: {
//                 id: true,
//                 name: true,
//                 avatar: true,
//                 bio: true,
//                 address: true,
//                 userID:true,
//                 user: { select: { map: { select: { latlng: true } } } },
//                 profession: { select: { id:true,  name: true }}
//             }
//         })
//         return _person
//     }
// }
// export { BuscaProfissionalService }
