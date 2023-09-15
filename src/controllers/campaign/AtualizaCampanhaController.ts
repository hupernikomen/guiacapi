import { Request, Response } from "express";
import { AtualizaCampanhaService } from "../../services/campaign/AtualizaCampanhaService";

class AtualizaCampanhaController {
    async handle(req: Request, res: Response) {
        const atualizaCampanhaService = new AtualizaCampanhaService();

        const campaignID = req.query.campaignID as string

        const { name, status, theme } = req.body;

        const _campaign = await atualizaCampanhaService.execute({
            name,
            status,
            theme,
            campaignID
        })

        return res.status(200).json(_campaign);

    }
}

export { AtualizaCampanhaController };
