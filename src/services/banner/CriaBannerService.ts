import prismaClient from '../../prisma';

interface bannerRequest {
  image: object;
  route: string;
  paramsID: string;
  userID: string;
  link: string;
  typebanner: string;
  category: string;
}
class CriaBannerService {
  async execute({ image, route, paramsID, userID, link, typebanner, category }: bannerRequest) {
    const _banner = await prismaClient.banner.create({
      data: {
        image,
        route,
        paramsID,
        userID,
        link,
        typebanner,
        category
      }
    });

    return _banner;
  }
}

export { CriaBannerService };
