import prismaClient from "../../prisma";

interface ProductRequest {
  nome: string;
  descricao: string;
  preco: string;
  tamanho: string;
  cor: string;
  imagens: object,
  categoriaID: string;
  lojaID: string;
}

class CriarProdutoService {
  async execute({
    nome,
    descricao,
    preco,
    tamanho,
    cor,
    imagens,
    categoriaID,
    lojaID,
  }: ProductRequest) {
    try {

      const produto = await prismaClient.produto.create({
        data: {
          nome,
          descricao,
          preco,
          tamanho,
          cor,
          imagens,
          categoriaID,
          lojaID,
          createdAt:new Date()
        },
      });
      return produto;

    } catch (error) {
      console.error('Erro no Service API', error)
    }

  }
}

export { CriarProdutoService };
