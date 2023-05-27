import { Request, Response } from "express";
import { AtualizarCategoriaService } from "../../services/categoria/AtualizarCategoriaService";

class AtualizarCategoriaController {
  async handle(req: Request, res: Response) {
    const atualizarCategoriaService = new AtualizarCategoriaService();

    const categoriaID = req.query.categoriaID as string 

    const {
        nome
     } =
      req.body;

      const categoria = await atualizarCategoriaService.execute({
        nome,
        categoriaID
      })

      return res.status(200).json(categoria);


    }


  }

export { AtualizarCategoriaController };
