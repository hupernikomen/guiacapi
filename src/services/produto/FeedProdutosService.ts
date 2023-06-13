import prismaClient from "../../prisma";

class FeedProdutosService {
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
        oferta: true,
        imagens: true,
        campanha:{
          select:{
            id:true,
            nome:true,
            tema:true
          }
        },
        loja: {
          select: {
            id: true,
            nome: true,
            entrega:true
          }
        }
      },
    });

    return produto;
  }
}

export { FeedProdutosService };
