import prismaClient from '../../prisma';

class ListarPaymentBannerService {
  async execute() {
    return await prismaClient.paymentBanners.findMany({
      select: {
        id: true,
        value: true,
        expiration: true,
        createdAt: true,
        userID: true,
        bannerID: true,
        status: true,
        user: { select: { banners: true } }
      }
    });
  }
}

export { ListarPaymentBannerService };
