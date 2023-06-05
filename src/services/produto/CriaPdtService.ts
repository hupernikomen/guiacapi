import prismaClient from "../../prisma";

interface ProductRequest {
  nome: string,
  descricao: string,
  preco: string,
  tamanho: string,
  imagens: object,
  categoriaID: string,
  campanhaID: string,
  lojaID: string,
}

class CriaPdtService {
  async execute({
    nome,
    descricao,
    preco,
    tamanho,
    imagens,
    categoriaID,
    campanhaID,
    lojaID,
  }: ProductRequest) {
    try {

      const produto = await prismaClient.produto.create({
        data: {
          nome,
          descricao,
          preco,
          tamanho,
          imagens,
          categoriaID,
          campanhaID,
          lojaID,
        },
      });
      return produto;

    } catch (error) {
      console.error('Erro no Service API', error)
    }

  }
}

export { CriaPdtService };
