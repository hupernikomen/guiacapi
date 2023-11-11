import prismaClient from "../../prisma"

interface paymentRequest {
  value: string,
  datePayment: string,
  paymentID: string
}

class AtualizarPagamentoBannerService {
  async execute({
    paymentID,
    value,
    datePayment

  }: paymentRequest) {

    const __pay = await prismaClient.paymentBanners.updateMany({
      where: { id: paymentID },
      data: {
        value,
        datePayment,
      },

    })

    return __pay

  }
}

export { AtualizarPagamentoBannerService }