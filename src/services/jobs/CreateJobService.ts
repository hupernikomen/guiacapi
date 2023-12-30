import prismaClient from '../../prisma';

interface jobRequest {
  job: string;
  description: string;
  contact: string;
  validity: string;
  sendCurriculum: string;
  storeID: string;
  personID: string;
}

class CriaJobService {
  async execute({ job, description, contact, validity, sendCurriculum, storeID, personID }: jobRequest) {
    const _job = await prismaClient.jobs.create({
      data: {
        job,
        description,
        contact,
        validity,
        sendCurriculum,
        storeID,
        personID
      }
    });

    return _job;
  }
}

export { CriaJobService };
