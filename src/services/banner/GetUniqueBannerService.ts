import prismaClient from '../../prisma';

interface bannerRequest {
  bannerID: string;
}

class GetUniqueBannerService {
  async execute({ bannerID }: bannerRequest) {
    const _banner = await prismaClient.banner.findFirst({
      where: { id: bannerID },
      select: {
        id: true,
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

export { GetUniqueBannerService };
