import prismaClient from '../../prisma';

class ListarBannersService {
  async execute() {
    const _banners = await prismaClient.banner.findMany({
      where: { paymentBanners: { every: { status: 'Aprovado' } } },
      select: {
        id: true,
        route: true,
        userID: true,
        link: true,
        image: true,
        paymentBanners: true,
        typebanner: true,
        categoryID: true

        // paramsID: true,
      }
    });

    return _banners;
  }
}

export { ListarBannersService };
