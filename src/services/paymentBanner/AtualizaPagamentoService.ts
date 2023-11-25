import prismaClient from "../../prisma"

interface paymentRequest {
  value: string,
  expiration: string,
  paymentID: string,
  status: string
}

class AtualizarPagamentoBannerService {
  async execute({
    paymentID,
    value,
    expiration,
    status

  }: paymentRequest) {

    const __pay = await prismaClient.paymentBanners.updateMany({
      where: { id: paymentID },
      data: {
        value,
        expiration,
        status
      },

    })

    return __pay

  }
}

export { AtualizarPagamentoBannerService }