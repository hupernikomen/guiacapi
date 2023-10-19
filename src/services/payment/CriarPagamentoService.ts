import prismaClient from "../../prisma";

interface paymentRequest {
  userID: string,
  value:string,
  expiration:string,
  referenceID:string
}

class CriaPaymentService {

  async execute({

    userID,
    value,
    expiration,
    referenceID

  }: paymentRequest) {

    const _payment = await prismaClient.payment.create({
      data: {
        userID,
        value,
        expiration,
        referenceID
      }
    })

    return _payment
  }
}

export { CriaPaymentService }