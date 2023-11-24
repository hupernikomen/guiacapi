import prismaClient from "../../prisma";

interface paymentRequest {
  value: string,
  expiration: string,
  userID: string,
  status: string
}

class CriaPaymentService {

  async execute({
    value,
    expiration,
    userID,
    status

  }: paymentRequest) {

    const _payment = await prismaClient.payment.create({
      data: {
        value,
        expiration,
        userID,
        status
      }
    }) 

    return _payment
  }
}

export { CriaPaymentService }