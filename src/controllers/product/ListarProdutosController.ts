import { Request, Response } from 'express'
import { ListarProdutosService } from '../../services/product/ListarProdutosService'


class ListarProdutosController {
    async handle(req: Request, res: Response) {
        const regionID = req.query.regionID as string
        const arrayCategoriesIDs = req.body

        const listarProdutosService = new ListarProdutosService()

        const feed = await listarProdutosService.execute({
            regionID,
            arrayCategoriesIDs
        })
        console.log(regionID,"REG");
        console.log(arrayCategoriesIDs,"arrayCategoriesIDs");
        console.log(feed,"fedd");
        
        return res.json(feed)

    }
}

export { ListarProdutosController }