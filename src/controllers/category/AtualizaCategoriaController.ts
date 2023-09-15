import { Request, Response } from "express";
import { AtualizaCategoriaService } from "../../services/category/AtualizaCategoriaService";

class AtualizaCategoriaController {
  async handle(req: Request, res: Response) {
    
    const categoryID = req.query.categoryID as string 
    const { name } = req.body;
    
    const atualizaCategoriaService = new AtualizaCategoriaService();
      await atualizaCategoriaService.execute({
        name,
        categoryID
      })

      return res.status(200).json({message: "Atualzado com Sucesso"});
    }
  }

export { AtualizaCategoriaController };
