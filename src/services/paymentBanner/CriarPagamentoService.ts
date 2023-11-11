import prismaClient from "../../prisma";

interface paymentRequest {
  userID: string,
  value:string,
  datePayment:string,
}

class CriaPaymentBannerService {

  async execute({

    userID,
    value,
    datePayment,

  }: paymentRequest) {

    const _payment = await prismaClient.paymentBanners.create({
      data: {
        userID,
        value,
        datePayment,
      }
    })

    return _payment
  }
}

export { CriaPaymentBannerService }