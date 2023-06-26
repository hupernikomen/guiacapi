import { Request, Response } from "express";
import { AtualizaCategoriaService } from "../../services/categoria/AtualizaCategoriaService";

class AtualizaCategoriaController {
  async handle(req: Request, res: Response) {
    const atualizaCategoriaService = new AtualizaCategoriaService();

    const categoriaID = req.query.categoriaID as string 

    const {
        nome
     } =
      req.body;

      const categoria = await atualizaCategoriaService.execute({
        nome,
        categoriaID
      })

      return res.status(200).json(categoria);


    }


  }

export { AtualizaCategoriaController };
