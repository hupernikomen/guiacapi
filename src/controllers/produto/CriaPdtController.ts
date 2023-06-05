import { Request, Response } from "express";
import { CriaPdtService } from "../../services/produto/CriaPdtService";

class CriaPdtController {
  async handle(req: Request, res: Response) {
    const criaPdtService = new CriaPdtService();
    const lojaID = req.loja_ID
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

      const produto = await criaPdtService.execute({
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

export { CriaPdtController };
