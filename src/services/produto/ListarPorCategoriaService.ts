import prismaClient from "../../prisma";

interface ProductRequest {
  categoriaID: string;
}

class ListarPorCategoriaService {
  async execute({ categoriaID }: ProductRequest) {
    const categoria = await prismaClient.produto.findMany({
      where: {
        categoriaID,
        loja: {
          statusGuia: true,
          // regiao: {
          //   nome: "Dirceu", // Logica de alteração de REGIAO no FrontEnd
          // },
        },
      },
      select: {
        id: true,
        nome: true,
        preco: true,
        oferta: true,
        imagens: true,
        loja:{
          select:{
            id:true,
            nome:true,
            entrega:true
          }
        },
      },
    });

    return categoria;
  }
}

export { ListarPorCategoriaService };
