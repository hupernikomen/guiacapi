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
    } =
    req.body;

    
    if (!req.files) {
      throw new Error("Ops.. algo deu errado!");
    } else {
      const files = req.files;
      

      const produto = await criaProdutoService.execute({
        codigo,
        nome,
        descricao,
        preco,
        tamanho,
        imagens: files,
        categoriaID,
        lojaID,
      })

      
      return res.status(200).json(produto);


    }


  }
}

export { CriaProdutoController };
