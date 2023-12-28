import prismaClient from '../../prisma';

class ListarAdminService {
  async execute() {
    const _banners = await prismaClient.banner.findMany({
      select: {
        id: true,
        image: true,
        route: true,
        userID: true,
        link: true,
        paymentBanners: true,
        categoryID: true,
        typebanner: true
        // paramsID: true,
      }
    });

    return _banners;
  }
}

export { ListarAdminService };
