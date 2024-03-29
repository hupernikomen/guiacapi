import prismaClient from '../../prisma';

interface bannerRequest {
  image: object;
  route: string;
  paramsID: string;
  userID: string;
  link: string;
  typebanner: string;
  categoryID: string;
}
class CreateBannerService {
  async execute({ image, route, paramsID, userID, link, typebanner, categoryID }: bannerRequest) {
    const _banner = await prismaClient.banner.create({
      data: {
        image,
        route,
        paramsID,
        userID,
        link,
        typebanner,
        categoryID
      }
    });

    return _banner;
  }
}

export { CreateBannerService };
