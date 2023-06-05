import prismaClient from "../../prisma";

interface ProductRequest {
  nome: string,
  descricao: string,
  preco: number,
  tamanho: string,
  imagens: object,
  categoriaID: string,
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
    lojaID,
  }: ProductRequest) {
    try {

console.log(typeof preco, "typeoffffff")


      const produto = await prismaClient.produto.create({
        data: {
          nome,
          descricao,
          preco,
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

export { CriaPdtService };
