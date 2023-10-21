import prismaClient from "../../prisma";

interface paymentRequest {
  bannerID: string,
  value:string,
  expiration:string,
}

class CriaPaymentBannerService {

  async execute({

    bannerID,
    value,
    expiration,

  }: paymentRequest) {

    const _payment = await prismaClient.paymentBanners.create({
      data: {
        bannerID,
        value,
        expiration,
      }
    })

    return _payment
  }
}

export { CriaPaymentBannerService }