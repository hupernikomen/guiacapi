import prismaClient from "../../prisma";

interface paymentRequest {
  userID: string,
  value:string,
  dataPayment:string,
}

class CriaPaymentBannerService {

  async execute({

    userID,
    value,
    dataPayment,

  }: paymentRequest) {

    const _payment = await prismaClient.paymentBanners.create({
      data: {
        userID,
        value,
        dataPayment,
      }
    })

    return _payment
  }
}

export { CriaPaymentBannerService }