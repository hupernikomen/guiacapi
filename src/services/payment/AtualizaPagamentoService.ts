import prismaClient from "../../prisma"

interface paymentRequest {
  value: string,
  expiration: string,
  paymentID: string,
  status: string
}

class AtualizarPagamentoService {
  async execute({
    paymentID,
    value,
    expiration,
    status

  }: paymentRequest) {

    const __pay = await prismaClient.payment.updateMany({
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

export { AtualizarPagamentoService }