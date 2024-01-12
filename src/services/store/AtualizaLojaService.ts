import prismaClient from '../../prisma';

interface lojaDataRequest {
  userID: string;
  avatar: object;
  name: string;
  bio: string;
  address: string;
  district: string;
  reference: string;
  delivery: boolean;
}

class AtualizaLojaService {
  async execute({ userID, avatar, name, bio, address, district, reference, delivery }: lojaDataRequest) {
    const _store = await prismaClient.store.findFirst({ where: { userID } });

    if (!_store) throw new Error('Ops, infelizmente não encontramos!');

    const __store = await prismaClient.store.updateMany({
      where: { userID },
      data: {
        name,
        avatar,
        bio,
        address,
        district,
        reference,
        delivery
      }
    });

    return __store;
  }
}
export { AtualizaLojaService };
