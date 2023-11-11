
import prismaClient from "../../prisma";

class ListarPaymentBannerService {

  async execute() {

    return await prismaClient.paymentBanners.findMany({
      select: {
        id: true,
        value:true,
        datePayment:true,
        createdAt:true,
        userID:true,
        
      }
    })
  }
}

export { ListarPaymentBannerService }