
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
        updatedAt:true,
        userID:true
        
      }
    })
  }
}

export { ListarPaymentService }