import { Request, Response } from "express";
import { AtualizaProfissaoService } from "../../services/profession/AtualizaProfissaoService";

class AtualizaProfissaoController {
  async handle(req: Request, res: Response) {
    
    const professionID = req.query.professionID as string
    const { name } = req.body;
    
    const atualizaProfissaoService = new AtualizaProfissaoService();
    await atualizaProfissaoService.execute({
      name,
      professionID
    })

    return res.status(200).json({message:"Profissão atualizada"});
  }
}

export { AtualizaProfissaoController };
