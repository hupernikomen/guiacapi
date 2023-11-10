import { Request, Response } from "express";
import { CriaPaymentService } from "../../services/payment/CriarPagamentoService";

class CriaPaymentController {
  async handle(req: Request, res: Response) {
    
    const userID = req.query.userID as string
    const { value, dataPayment } = req.body;
    
    const criaPaymentService = new CriaPaymentService();

    const _payment = await criaPaymentService.execute({
      userID,
      value,
      dataPayment,
    })

    return res.status(200).json(_payment);




  }
}

export { CriaPaymentController };
