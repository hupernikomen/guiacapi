import prismaClient from "../../prisma";

class ListarUsuariosService {
  async execute() {

    const usuarios = await prismaClient.usuario.findMany({
      select: {
        id: true,
        status: true,
        loja: { select: { nome: true } },
        profissional: { select: { nome: true } },
        posto: { select: { nome: true } },
        regiao: { select: { nome: true } },
        contato: true

      }
    })

    return usuarios
  }
}

export { ListarUsuariosService }