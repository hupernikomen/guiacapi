import prismaClient from '../../prisma';

interface jobRequest {
  job: string;
  description: string;
  contact: string;
  validity: string;
  sendCurriculum: string;
  userID: string;
}

class CriaJobService {
  async execute({ job, description, contact, validity, sendCurriculum, userID }: jobRequest) {
    const _job = await prismaClient.jobs.create({
      data: {
        job,
        description,
        contact,
        validity,
        sendCurriculum,
        userID
      }
    });

    return _job;
  }
}

export { CriaJobService };
