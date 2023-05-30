import { Request, Response } from "express";
import { AtualizaCtService } from "../../services/categoria/AtualizaCtService";

class AtualizaCtController {
  async handle(req: Request, res: Response) {
    const atualizaCtService = new AtualizaCtService();

    const categoriaID = req.query.categoriaID as string 

    const {
        nome
     } =
      req.body;

      const categoria = await atualizaCtService.execute({
        nome,
        categoriaID
      })

      return res.status(200).json(categoria);


    }


  }

export { AtualizaCtController };
