import prismaClient from "../../prisma";

class ListarProdutosService {
  async execute() {
    const produto = await prismaClient.produto.findMany({
      where: {
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
        descricao: true,
        tamanho: true,
        oferta: true,
        imagens: true,
        loja: {
          select: {
            id: true,
            nome: true,
            entrega:true
          }
        },


      },
    });

    return produto;
  }
}

export { ListarProdutosService };
