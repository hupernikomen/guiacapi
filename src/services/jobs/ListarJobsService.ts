import prismaClient from '../../prisma';

class ListarJobsService {
  async execute() {
    const map = await prismaClient.jobs.findMany();

    return map;
  }
}

export { ListarJobsService };
