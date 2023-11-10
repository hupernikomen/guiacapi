import prismaClient from "../../prisma";

interface paymentRequest {
  value: string,
  dataPayment: string,
  userID: string
}

class CriaPaymentService {

  async execute({
    value,
    dataPayment,
    userID

  }: paymentRequest) {

    const _payment = await prismaClient.payment.create({
      data: {
        value,
        dataPayment,
        userID
      }
    }) 

    return _payment
  }
}

export { CriaPaymentService }