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
        bannerID: true,
        userID: true,
        status: true,
        user: { select: { banners: true } }
      }
    });
  }
}

export { BuscaPaymentBannerService };
