
import prismaClient from "../../prisma";

interface PaymentRquest {
  paymentID: string
}

class ListarPaymentService {

  async execute({ paymentID }: PaymentRquest) {

    return await prismaClient.payment.findMany({
      select: {
        id: true,
        value:true,
        expiration:true,
        createdAt:true,
        userID:true,
        paymentOf:true
        
      }
    })
  }
}

export { ListarPaymentService }