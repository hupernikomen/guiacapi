import prismaClient from "../../prisma";

interface ProductRequest {
  codigo: string,
  nome: string,
  descricao: string,
  preco: number,
  tamanho: string,
  imagens: object,
  categoriaID: string,
  lojaID: string,
}

class CriaProdutoService {
  async execute({
    codigo,
    nome,
    descricao,
    preco,
    tamanho,
    imagens,
    categoriaID,
    lojaID,
  }: ProductRequest) {
    try {


      const produto = await prismaClient.produto.create({

        data: {
          codigo,
          nome,
          descricao,
          preco: Number(preco),
          tamanho,
          imagens,
          categoriaID,
          lojaID,
        },
      });

      return produto;

    } catch (error) {
      console.error('Erro no Service API', error)
    }

  }
}

export { CriaProdutoService };
