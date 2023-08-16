import { Request, Response } from "express";
import { CriaPortfolioService } from "../../services/portfolio/CriaPortfolioService";

class CriaPortfolioControlller {
  async handle(req: Request, res: Response) {
    const criaPortfolioService = new CriaPortfolioService();

    const profissionalID = req.query.profissionalID as string

    if (!req.file) {
      throw new Error("Ops.. algo deu errado!");
    }

    const portfolio = await criaPortfolioService.execute({
      imagem: req.file,
      profissionalID,
    })

    return res.status(200).json(portfolio);

  }
}

export { CriaPortfolioControlller };
