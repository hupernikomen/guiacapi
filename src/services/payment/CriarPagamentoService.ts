import prismaClient from "../../prisma";

interface paymentRequest {
  userID: string,
  value:string,
  expiration:string,
  paymentOfID:string
}

class CriaPaymentService {

  async execute({

    userID,
    value,
    expiration,
    paymentOfID

  }: paymentRequest) {

    const _payment = await prismaClient.payment.create({
      data: {
        userID,
        value,
        expiration,
        paymentOfID
      }
    })

    return _payment
  }
}

export { CriaPaymentService }