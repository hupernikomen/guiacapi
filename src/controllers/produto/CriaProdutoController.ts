import { Request, Response } from "express";
import { CriaProdutoService } from "../../services/produto/CriaProdutoService";

class CriaProdutoController {
  async handle(req: Request, res: Response) {
    const criaProdutoService = new CriaProdutoService();

    const lojaID = req.query.lojaID as string
    const {
      codigo,
      nome,
      preco,
      descricao,
      tamanho,
      categoriaID,
      subcategoriaID
    } =
      req.body;


    if (!req.files) {
      throw new Error("Ops.. algo deu errado!");
    }

    const produto = await criaProdutoService.execute({
      codigo,
      nome,
      descricao,
      preco,
      tamanho,
      imagens: req.files,
      categoriaID,
      subcategoriaID,
      lojaID,
    })

    return res.status(200).json(produto);

  }
}

export { CriaProdutoController };
