
import prismaClient from "../../prisma";

class ListarPaymentService {

  async execute() {

    return await prismaClient.payment.findMany({
      select: {
        id: true,
        value:true,
        expiration:true,
        createdAt:true,
        userID:true,
        status:true
        
      }
    })
  }
}

export { ListarPaymentService }