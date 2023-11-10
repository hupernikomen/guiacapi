
import prismaClient from "../../prisma";

interface PaymentRquest {
  userID: string,
}

class BuscaPaymentBannerService {

  async execute({ userID }: PaymentRquest) {

    return await prismaClient.paymentBanners.findFirst({
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

export { BuscaPaymentBannerService }