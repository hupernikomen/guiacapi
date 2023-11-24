import { Request, Response } from "express";
import { CriaProdutoService } from "../../services/product/CriaProdutoService";

class CriaProdutoController {
  async handle(req: Request, res: Response) {
    
    const storeID = req.query.storeID as string
    const {
      reference,
      name,
      description,
      price,
      size,
      color,
      categoryID,
      subcategoryID,
    } = req.body;

      
    if (!req.files) throw new Error("Ops.. algo deu errado!");
    
    const criaProdutoService = new CriaProdutoService();
    const produto = await criaProdutoService.execute({
      reference,
      name,
      description,
      price,
      size,
      color,
      image: req.files,
      categoryID,
      subcategoryID,
      storeID,
    })

    return res.status(200).json(produto);

  }
}

export { CriaProdutoController };
