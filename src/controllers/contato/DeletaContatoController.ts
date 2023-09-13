import { Request, Response } from 'express'

import { DeletaContatoService } from '../../services/contato/DeletaContatoService'

class DeletarContatoController {
  async handle(req: Request, res: Response) {
    const contatoID = req.query.contatoID as string

    const deletaContatoService = new DeletaContatoService()
    await deletaContatoService.execute({ contatoID })

    return res.status(200).json({ message:  "Contato Excluido" })
  }
}

export { DeletarContatoController }