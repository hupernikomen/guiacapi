// import prismaClient from "../../prisma";

// class ListarProfissionalServiceAdmin {

//   async execute() {

//     return await prismaClient.person.findMany({
//       select: {
//         id: true,
//         avatar: true,
//         name: true,
//         bio: true,
//         professionID: true,
//         profession: { select: { name: true } },
//         user: { select: { payment: true } },
//         userID: true,
//         type:true
//       }
//     })
//   }
// }

// export { ListarProfissionalServiceAdmin }
