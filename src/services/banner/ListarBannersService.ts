import prismaClient from '../../prisma';

class ListarBannersService {
  async execute() {
    const _banners = await prismaClient.banner.findMany({
      // where: { user: { paymentBanners: { some: { status: 'Aprovado' } } } },
      select: {
        image: true,
        route: true,
        paramsID: true,
        userID: true,
        link: true,
        categoryID: true,
        typebanner: true,
        id: true,
        user: {
          select: {
            owner: { select: { name: true, whatsapp: true } },
            paymentBanners: {
              select: {
                id: true,
                expiration: true,
                status: true,
                bannerID: true
              }
            },
            payment: {
              select: {
                id: true,
                expiration: true,
                status: true
              }
            }
          }
        }
      }
    });

    return _banners;
  }
}

export { ListarBannersService };
