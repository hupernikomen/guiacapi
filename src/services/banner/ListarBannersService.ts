import prismaClient from '../../prisma';

class ListarBannersService {
  async execute() {
    const _banners = await prismaClient.banner.findMany({
      where: { paymentBanners: { every: { status: 'Aprovado' } } },
      select: {
        image: true,
        route: true,
        paramsID: true,
        userID: true,
        link: true,
        categoryID: true,
        typebanner: true,
        id: true,
        paymentBanners: true
      }
    });

    return _banners;
  }
}

export { ListarBannersService };
