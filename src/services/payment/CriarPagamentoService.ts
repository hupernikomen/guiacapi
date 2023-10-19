import prismaClient from "../../prisma";

interface paymentRequest {
  userID: string,
  value:string,
  expiration:string,
  type:string
}

class CriaPaymentService {

  async execute({

    userID,
    value,
    expiration,
    type

  }: paymentRequest) {

    const _payment = await prismaClient.payment.create({
      data: {
        userID,
        value,
        expiration,
        type
      }
    })

    return _payment
  }
}

export { CriaPaymentService }