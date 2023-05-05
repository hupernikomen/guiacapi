import { Request, Response } from 'express'
import { MeLojaService } from '../../services/loja/MeLojaService'

class MeLojaController {
    async handle(request:Request,response:Response) {

        const loja_ID = request.loja_ID

        const meLojaService = new MeLojaService();

        const me = await meLojaService.execute(loja_ID)

        return response.json(me)
    }
}

export { MeLojaController }