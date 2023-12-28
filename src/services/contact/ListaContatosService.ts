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
        away: true
      }
    });

    const owner = await prismaClient.owner.findFirst({
      where: { userID },
      select: {
        id: true,
        name: true,
        whatsapp: true
      }
    });

    if (contato.length === 0) {
      return owner;
    } else {
      return contato;
    }
  }
}

export { ListaContatosService };
