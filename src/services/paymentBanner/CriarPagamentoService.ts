import prismaClient from '../../prisma';

interface paymentRequest {
  userID: string;
  bannerID: string;
  value: string;
  expiration: string;
}

class CriaPaymentBannerService {
  async execute({ userID, bannerID, value, expiration }: paymentRequest) {
    const _payment = await prismaClient.paymentBanners.create({
      data: {
        userID,
        bannerID,
        value,
        expiration
      }
    });

    return _payment;
  }
}

export { CriaPaymentBannerService };
