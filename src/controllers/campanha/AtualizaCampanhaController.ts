import { Request, Response } from "express";
import { AtualizaCampanhaService } from "../../services/campanha/AtualizaCampanhaService";

class AtualizaCampanhaController {
    async handle(req: Request, res: Response) {
        const atualizaCampanhaService = new AtualizaCampanhaService();

        const campanhaID = req.query.campanhaID as string

        const { nome, status, tema } = req.body;

        const campanha = await atualizaCampanhaService.execute({
            nome,
            status,
            tema,
            campanhaID
        })

        return res.status(200).json(campanha);

    }
}

export { AtualizaCampanhaController };
