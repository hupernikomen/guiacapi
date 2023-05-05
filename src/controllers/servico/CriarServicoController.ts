import { Request, Response } from "express";
import { CriarServicoService } from "../../services/servico/CriarServicoService";

class CriarServicoController {
  async handle(req: Request, res: Response) {
    const criarServicoService = new CriarServicoService();

    const {
        nome,
        nomeServico,
        listaServicos,
        bio,
        email,
        endereco,
        whatsapp,
        domicilio,
        categoria
      } =
      req.body;

    if (!req.file || !req.files) {
      throw new Error("Ops.. algo deu errado!");
    } else {
      const file = req.file;
      const img= req.files

      const servico = await criarServicoService.execute({
        foto: file,
        arrPortfolio:img,
        nome,
        nomeServico,
        listaServicos,
        bio,
        email,
        endereco,
        whatsapp,
        domicilio,
        categoria
      })

      return res.status(200).json(servico);


    }


  }
}

export { CriarServicoController };
