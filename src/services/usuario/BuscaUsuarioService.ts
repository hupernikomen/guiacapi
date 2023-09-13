import prismaClient from "../../prisma";

interface usuarioRequest {
  usuarioID: string
}


class BuscaUsuarioService {
  async execute({
    usuarioID
  }: usuarioRequest) {

    const usuario = await prismaClient.usuario.findFirst({
      where:{
        id: usuarioID
      },
      select: {
        id: true,
        email:true,
        posto:true,
        profissional:true,
        loja:true,
        status:true,
        mapa:true,
        rede:true
      }
    })



    return usuario
  }
}

export { BuscaUsuarioService }