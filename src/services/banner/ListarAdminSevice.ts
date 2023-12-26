import prismaClient from '../../prisma';

class ListarAdminService {
  async execute() {
    const _banners = await prismaClient.banner.findMany({
      select: {
        image: true,
        route: true,
        paramsID: true,
        userID: true,
        link: true,
        paymentBanners: true,
        categoryID: true,
        typebanner: true,
        id: true
      }
    });

    return _banners;
  }
}

export { ListarAdminService };
