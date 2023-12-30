import prismaClient from '../../prisma';

class ListarJobsService {
  async execute() {
    const map = await prismaClient.jobs.findMany({
      select: {
        contact: true,
        createdAt: true,
        description: true,
        id: true,
        job: true,
        sendCurriculum: true,
        validity: true,
        user: { select: { person: true, store: true } }
      }
    });

    return map;
  }
}

export { ListarJobsService };
