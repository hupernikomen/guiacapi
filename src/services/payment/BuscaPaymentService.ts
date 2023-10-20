
import prismaClient from "../../prisma";

interface PaymentRquest {
  paymentID: string
}

class BuscaPaymentService {

  async execute({ paymentID }: PaymentRquest) {

    return await prismaClient.payment.findFirst({
      where:{
        id: paymentID
      },
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

export { BuscaPaymentService }