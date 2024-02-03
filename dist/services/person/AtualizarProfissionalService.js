// import prismaClient from "../../prisma"
// interface profissionalRequest {
//     personID: string,
//     professionID:string,
//     avatar: object,
//     name: string,
//     bio: string,
//     address: string,
//     district: string,
// }
// class AtualizarProfissionalService {
//     async execute({
//         personID,
//         professionID,
//         avatar,
//         name,
//         bio,
//         address,
//         district,
//     }: profissionalRequest) {
//         const _person = await prismaClient.person.findFirst({ where: { id: personID } })
//         if (!_person) throw new Error("Ops, infelizmente não encontramos!");
//         const __person = await prismaClient.person.updateMany({
//             where: { id: personID },
//             data: {
//                 name,
//                 avatar,
//                 bio,
//                 address,
//                 district,
//                 professionID
//             },
//         })
//         return __person
//     }
// }
// export { AtualizarProfissionalService }
