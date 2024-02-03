// import prismaClient from "../../prisma";

// interface profissaoRequest {
//     name: string,
//     professionID: string
// }

// class AtualizaProfissaoService {

//     async execute({ name, professionID }: profissaoRequest) {

//         const _profession = await prismaClient.profession.update({
//             where: { id: professionID },
//             data: { name }
//         })

//         return _profession
//     }
// }

// export { AtualizaProfissaoService }
