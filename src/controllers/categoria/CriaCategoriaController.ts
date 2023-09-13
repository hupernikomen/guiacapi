import { Request, Response } from 'express'
import { CriaCategoriaService } from '../../services/categoria/CriaCategoriaService'

class CriaCategoriaController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body

        const criaCategoriaService = new CriaCategoriaService();
        const categoria = await criaCategoriaService.execute({ nome })

        if(!categoria) throw new Error("Erro ao criar categoria - API");
        return res.status(200).json({message: "Criado com Sucesso"});
    }
}

export { CriaCategoriaController }