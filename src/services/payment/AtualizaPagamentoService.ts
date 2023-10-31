import prismaClient from "../../prisma"

interface paymentRequest {
  value: string,
  expiration: string,
  paymentID: string
}

class AtualizarPagamentoService {
  async execute({
    paymentID,
    value,
    expiration

  }: paymentRequest) {

    const __pay = await prismaClient.payment.updateMany({
      where: { id: paymentID },
      data: {
        value,
        expiration,
      },

    })

    return __pay

  }
}

export { AtualizarPagamentoService }