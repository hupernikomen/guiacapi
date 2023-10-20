
import prismaClient from "../../prisma";

interface PaymentRquest {
  userID: string,
  paymentOf: string
}

class BuscaPaymentService {

  async execute({ userID, paymentOf }: PaymentRquest) {

    return await prismaClient.payment.findFirst({
      where: {
        userID,
        paymentOf
      },
      select: {
        id: true,
        value: true,
        expiration: true,
        createdAt: true,
        userID: true,
        paymentOf: true

      }
    })
  }
}

export { BuscaPaymentService }