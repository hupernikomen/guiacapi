import { Request, Response } from 'express'

import { DeletaContatoService } from '../../services/contact/DeletaContatoService'

class DeletarContatoController {
  async handle(req: Request, res: Response) {
    const contactID = req.query.contactID as string

    const deletaContatoService = new DeletaContatoService()
    await deletaContatoService.execute({ contactID })

    return res.status(200).json({ message:  "Contato Excluido" })
  }
}

export { DeletarContatoController }