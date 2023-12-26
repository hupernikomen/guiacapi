import prismaClient from '../../prisma';

interface PaymentRquest {
  bannerID: string;
}

class BuscaPaymentBannerService {
  async execute({ bannerID }: PaymentRquest) {
    return await prismaClient.paymentBanners.findMany({
      where: {
        bannerID
      },
      select: {
        id: true,
        value: true,
        expiration: true,
        createdAt: true,
        status: true,
        banner: true
      }
    });
  }
}

export { BuscaPaymentBannerService };
