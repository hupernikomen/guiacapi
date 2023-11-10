import prismaClient from "../../prisma"

interface paymentRequest {
  value: string,
  dataPayment: string,
  paymentID: string
}

class AtualizarPagamentoService {
  async execute({
    paymentID,
    value,
    dataPayment

  }: paymentRequest) {

    const __pay = await prismaClient.payment.updateMany({
      where: { id: paymentID },
      data: {
        value,
        dataPayment,
      },

    })

    return __pay

  }
}

export { AtualizarPagamentoService }