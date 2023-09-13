import { Request, Response } from "express";
import { CriaContatoService } from "../../services/contato/CriaContatoService";

class CriaContatoController {
  async handle(req: Request, res: Response) {
    const criaContatoService = new CriaContatoService();

    const usuarioID = req.query.usuarioID as string

    const { nome, whatsapp, setor, horario, sabado, domingo, afastado } = req.body;

    if (!req.file) throw new Error("Ops.. algo deu errado!");
    
    const contato = await criaContatoService.execute({
      nome,
      avatar: req.file,
      setor,
      whatsapp,
      horario,
      sabado,
      domingo,
      afastado,
      usuarioID
    })

    if(!contato) throw new Error("Erro ao criar contato - API");
    return res.status(200).json({message: "Criado com Sucesso"})

  }
}

export { CriaContatoController };
