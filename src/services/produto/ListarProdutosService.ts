import prismaClient from "../../prisma";

class ListarProdutosService {
  async execute() {
    const produto = await prismaClient.produto.findMany({
      where: {
        loja: {
          usuario:{
            status: true,
          }
        },
      },
      select: {
        id: true,
        nome: true,
        preco: true,
        oferta: true,
        imagens: true,
        descricao:true,
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
            delivery:true
          }
        }
      },
    });

    return produto;
  }
}

export { ListarProdutosService };
