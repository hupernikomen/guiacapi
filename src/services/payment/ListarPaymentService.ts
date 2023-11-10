
import prismaClient from "../../prisma";

class ListarPaymentService {

  async execute() {

    return await prismaClient.payment.findMany({
      select: {
        id: true,
        value:true,
        dataPayment:true,
        createdAt:true,
        userID:true,
        
      }
    })
  }
}

export { ListarPaymentService }