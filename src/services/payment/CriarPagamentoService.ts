import prismaClient from "../../prisma";

interface paymentRequest {
  value: string,
  datePayment: string,
  userID: string
}

class CriaPaymentService {

  async execute({
    value,
    datePayment,
    userID

  }: paymentRequest) {

    const _payment = await prismaClient.payment.create({
      data: {
        value,
        datePayment,
        userID
      }
    }) 

    return _payment
  }
}

export { CriaPaymentService }