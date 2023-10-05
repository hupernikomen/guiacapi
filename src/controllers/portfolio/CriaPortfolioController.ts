import { Request, Response } from "express";
import { CriaPortfolioService } from "../../services/portfolio/CriaPortfolioService";

class CriaPortfolioControlller {
  async handle(req: Request, res: Response) {
    const criaPortfolioService = new CriaPortfolioService();

    const personID = req.query.personID as string
    const {comments} = req.body

    if (!req.file) throw new Error("Erro ao carregar imagem - API");

    const _portfolio = await criaPortfolioService.execute({
      image: req.file,
      personID,
      comments
    })

    return res.status(200).json(_portfolio);

  }
}

export { CriaPortfolioControlller };
