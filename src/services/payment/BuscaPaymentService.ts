
import prismaClient from "../../prisma";

interface PaymentRquest {
  userID: string,
}

class BuscaPaymentService {

  async execute({ userID }: PaymentRquest) {

    return await prismaClient.payment.findUnique({
      where: {
        id: userID,
      },
      select: {
        id: true,
        value: true,
        datePayment: true,
        createdAt: true,
        userID: true,

      }
    })
  }
}

export { BuscaPaymentService }