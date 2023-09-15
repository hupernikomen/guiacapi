import { Request, Response } from 'express'
import { CriaCategoriaService } from '../../services/category/CriaCategoriaService'

class CriaCategoriaController {
    async handle(req: Request, res: Response) {
        const { name } = req.body

        const criaCategoriaService = new CriaCategoriaService();
        const _category = await criaCategoriaService.execute({ name })

        if(!_category) throw new Error("Erro ao criar categoria - API");
        
        return res.status(200).json({message: "Criado com Sucesso"});
    }
}

export { CriaCategoriaController }