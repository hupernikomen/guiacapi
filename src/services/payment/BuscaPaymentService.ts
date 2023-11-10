
import prismaClient from "../../prisma";

interface PaymentRquest {
  userID: string,
}

class BuscaPaymentService {

  async execute({ userID }: PaymentRquest) {

    return await prismaClient.payment.findFirst({
      where: {
        userID,
      },
      select: {
        id: true,
        value: true,
        dataPayment: true,
        createdAt: true,
        userID: true,

      }
    })
  }
}

export { BuscaPaymentService }