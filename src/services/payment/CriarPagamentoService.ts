import prismaClient from "../../prisma";

interface paymentRequest {
  value: string,
  expiration: string,
  userID: string
}

class CriaPaymentService {

  async execute({
    value,
    expiration,
    userID

  }: paymentRequest) {

    const _payment = await prismaClient.payment.create({
      data: {
        value,
        expiration,
        userID
      }
    })

    return _payment
  }
}

export { CriaPaymentService }