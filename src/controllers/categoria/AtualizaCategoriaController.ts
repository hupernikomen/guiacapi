import { Request, Response } from "express";
import { AtualizaCategoriaService } from "../../services/categoria/AtualizaCategoriaService";

class AtualizaCategoriaController {
  async handle(req: Request, res: Response) {
    
    const categoriaID = req.query.categoriaID as string 
    const { nome } = req.body;
    
    const atualizaCategoriaService = new AtualizaCategoriaService();
      await atualizaCategoriaService.execute({
        nome,
        categoriaID
      })

      return res.status(200).json({message: "Atualzado com Sucesso"});
    }
  }

export { AtualizaCategoriaController };
