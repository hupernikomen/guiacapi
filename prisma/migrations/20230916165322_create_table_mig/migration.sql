-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL,
    "nick" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);
