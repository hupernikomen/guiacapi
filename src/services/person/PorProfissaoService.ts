import prismaClient from "../../prisma";

interface ProductRequest {
  professionID: string;
}

class PorProfissaoService {
  async execute({ professionID }: ProductRequest) {

    const _person = await prismaClient.person.findMany({
      where: { user: { status: true }, professionID },
      select: {
        id: true,
        avatar: true,
        name: true,
        portfolio: true,
        address: true,
        bio: true,
      }
    });

    return _person;
  }
}

export { PorProfissaoService };
