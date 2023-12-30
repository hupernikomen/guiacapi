-- CreateTable
CREATE TABLE "jobs" (
    "id" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "validity" TEXT NOT NULL,
    "sendCurriculum" TEXT NOT NULL,
    "storeID" TEXT,
    "personID" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_storeID_fkey" FOREIGN KEY ("storeID") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_personID_fkey" FOREIGN KEY ("personID") REFERENCES "persons"("id") ON DELETE SET NULL ON UPDATE CASCADE;
