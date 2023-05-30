// import { Request, Response } from 'express'
// import { BuscarProdutosService } from '../../services/produto/BuscarProdutoService'

// class SearchPdtController {
//     async handle(req: Request, res: Response) {
//         const nomeProduto = req.query.nomeProduto as string

//         const buscarProdutosServices = new BuscarProdutosService()

//         const produto = await buscarProdutosServices.execute({
//             nomeProduto
//         })

//         return res.json(produto)
//     }
// }

// export { SearchPdtController }