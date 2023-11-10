import prismaClient from "../../prisma"

interface paymentRequest {
  value: string,
  dataPayment: string,
  paymentID: string
}

class AtualizarPagamentoBannerService {
  async execute({
    paymentID,
    value,
    dataPayment

  }: paymentRequest) {

    const __pay = await prismaClient.paymentBanners.updateMany({
      where: { id: paymentID },
      data: {
        value,
        dataPayment,
      },

    })

    return __pay

  }
}

export { AtualizarPagamentoBannerService }