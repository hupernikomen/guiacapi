import prismaClient from '../../prisma';

interface DeleteBannerRequest {
  bannerID: string;
}

class DeleteBannerService {
  async execute({ bannerID }: DeleteBannerRequest) {
    const _banner = await prismaClient.banner.findFirst({ where: { id: bannerID } });
    if (!_banner) throw new Error('Banner não existe');

    const __banner = await prismaClient.banner.delete({ where: { id: bannerID } });
    return __banner;
  }
}

export { DeleteBannerService };
