import { Request, Response } from "express";
import { CriaPdtService } from "../../services/produto/CriaPdtService";

class CriaPdtController {
  async handle(req: Request, res: Response) {
    const criaPdtService = new CriaPdtService();
    const lojaID = req.loja_ID
    // const lojaID = req.query.lojaID as string
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

      let precoNumber = parseFloat(preco)

      const produto = await criaPdtService.execute({
        nome,
        descricao,
        preco: precoNumber,
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
