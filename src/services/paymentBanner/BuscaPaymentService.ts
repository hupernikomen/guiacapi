import prismaClient from '../../prisma';

interface PaymentRquest {
  userID: string;
  bannerID: string;
}

class BuscaPaymentBannerService {
  async execute({ userID, bannerID }: PaymentRquest) {
    return await prismaClient.paymentBanners.findFirst({
      where: {
        userID,
        bannerID
      },
      select: {
        id: true,
        value: true,
        expiration: true,
        createdAt: true,
        userID: true,
        bannerID: true,
        user: { select: { banners: { where: { id: bannerID } } } }
      }
    });
  }
}

export { BuscaPaymentBannerService };
