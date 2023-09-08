import prismaClient from "../../prisma";

interface ProductRequest {
  codigo: string,
  nome: string,
  descricao: string,
  preco: number,
  tamanho: string,
  cores: string,
  imagens: object,
  categoriaID: string,
  subcategoriaID:string,
  lojaID: string,
}

class CriaProdutoService {
  async execute({
    codigo,
    nome,
    descricao,
    preco,
    tamanho,
    cores,
    imagens,
    categoriaID,
    subcategoriaID,
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
          cores,
          imagens,
          categoriaID,
          subcategoriaID,
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
