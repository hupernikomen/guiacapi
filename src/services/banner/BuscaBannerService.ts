import prismaClient from '../../prisma';

interface bannerRequest {
  bannerID: string;
}

class BuscaBannerService {
  async execute({ bannerID }: bannerRequest) {
    const _banner = await prismaClient.banner.findFirst({
      where: { id: bannerID },
      select: {
        image: true,
        route: true,
        paramsID: true,
        userID: true,
        user: {
          select: {
            payment: {
              select: {
                expiration: true
              }
            }
          }
        }
      }
    });

    return _banner;
  }
}

export { BuscaBannerService };
