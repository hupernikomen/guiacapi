import { Request, Response } from "express";
import { AtualizaCampService } from "../../services/campanha/AtualizaCampService";

class AtualizaCampController {
    async handle(req: Request, res: Response) {
        const atualizaCampService = new AtualizaCampService();

        const campanhaID = req.query.campanhaID as string

        const { nome, status, tema } = req.body;

        const campanha = await atualizaCampService.execute({
            nome,
            status,
            tema,
            campanhaID
        })

        return res.status(200).json(campanha);


    }


}

export { AtualizaCampController };
