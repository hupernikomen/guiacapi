import prismaClient from "../../prisma"

interface paymentRequest {
  value: string,
  expiration: string,
  paymentID: string
}

class AtualizarPagamentoBannerService {
  async execute({
    paymentID,
    value,
    expiration

  }: paymentRequest) {

    const __pay = await prismaClient.paymentBanners.updateMany({
      where: { id: paymentID },
      data: {
        value,
        expiration,
      },

    })

    return __pay

  }
}

export { AtualizarPagamentoBannerService }