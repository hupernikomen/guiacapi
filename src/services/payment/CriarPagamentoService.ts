import prismaClient from "../../prisma";

interface paymentRequest {
  userID: string,
  value:string,
  expiration:string
}

class CriaPaymentService {

  async execute({

    userID,
    value,
    expiration

  }: paymentRequest) {

    const _payment = await prismaClient.payment.create({
      data: {
        userID,
        value,
        expiration
      }
    })

    return _payment
  }
}

export { CriaPaymentService }