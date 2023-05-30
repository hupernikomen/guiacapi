import { Request, Response } from "express";
import { CriarProdutoService } from "../../services/produto/CriarProdutoService";

class CriarProdutoController {
  async handle(req: Request, res: Response) {
    const criarProdutoService = new CriarProdutoService();
    const lojaID = req.query.lojaID as string
    const {
      nome,
      descricao,
      preco,
      tamanho,
      categoriaID,
     } =
      req.body;

    if (!req.files) {
      throw new Error("Ops.. algo deu errado!");
    } else {
      const files = req.files;
      


      const produto = await criarProdutoService.execute({
        nome,
        descricao,
        preco,
        tamanho,
        imagens:files,
        categoriaID,
        lojaID,
      })

      return res.status(200).json(produto);


    }


  }
}

export { CriarProdutoController };
