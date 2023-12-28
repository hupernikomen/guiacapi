import prismaClient from '../../prisma';

interface contatoRequest {
  userID: string;
}

class ListaContatosService {
  async execute({ userID }: contatoRequest) {
    const contato = await prismaClient.contact.findMany({
      where: {
        userID
      },
      select: {
        id: true,
        name: true,
        avatar: true,
        sector: true,
        whatsapp: true,
        time: true,
        saturday: true,
        sunday: true,
        away: true,
        user: { select: { owner: true } }
      }
    });

    return contato;
  }
}

export { ListaContatosService };
