import prismaClient from "../../prisma";

interface paymentRequest {
  userID: string,
  value:string,
  expiration:string,
}

class CriaPaymentBannerService {

  async execute({

    userID,
    value,
    expiration,

  }: paymentRequest) {

    const _payment = await prismaClient.paymentBanners.create({
      data: {
        userID,
        value,
        expiration,
      }
    })

    return _payment
  }
}

export { CriaPaymentBannerService }