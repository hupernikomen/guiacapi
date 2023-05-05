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
          ativo: true,
          // regiao: {
          //   nome: "Dirceu", // Logica de alteração de REGIAO no FrontEnd
          // },
        },
      },
      select: {
        id: true,
        nome: true,
        preco: true,
        descricao: true,
        oferta: true,
        imagens: true,
        lojaID:true,
      },
    });

    return categoria;
  }
}

export { ListarPorCategoriaService };
