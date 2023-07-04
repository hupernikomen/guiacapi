import { Request, Response } from "express";
import { AtualizaPostoService } from "../../services/posto/AtualizarPostoService";

class AtualizaPostoController {
  async handle(req: Request, res: Response) {
    const atualizaPostoService = new AtualizaPostoService();

    const postoID = req.query.postoID as string 

    const {
        nome,
        avatar,
        tabela,
        bairro
     } =
      req.body;

      const posto = await atualizaPostoService.execute({

        nome,
        avatar,
        tabela,
        bairro,
        postoID
      })

      return res.status(200).json(posto);


    }


  }

export { AtualizaPostoController };
