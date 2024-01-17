import prismaClient from '../../prisma';

interface mapaRequest {
  userID: string;
}

class BuscaOwnerService {
  async execute({ userID }: mapaRequest) {
    const owner = await prismaClient.owner.findFirst({
      where: { userID },
      select: {
        id: true,
        name: true,
        whatsapp: true,
        user: { select: { store: { select: { avatar: true } }, services: { select: { avatar: true } } } }
      }
    });
    return owner;
  }
}

export { BuscaOwnerService };
