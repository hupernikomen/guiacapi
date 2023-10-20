import prismaClient from "../../prisma";

interface paymentRequest {
  userID: string,
  value:string,
  expiration:string,
  paymentOf:string
}

class CriaPaymentService {

  async execute({

    userID,
    value,
    expiration,
    paymentOf

  }: paymentRequest) {

    const _payment = await prismaClient.payment.create({
      data: {
        userID,
        value,
        expiration,
        paymentOf
      }
    })

    return _payment
  }
}

export { CriaPaymentService }