-- CreateTable
CREATE TABLE "scenario" (
    "id" TEXT NOT NULL,
    "image" JSONB NOT NULL,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scenario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "scenario" ADD CONSTRAINT "scenario_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
