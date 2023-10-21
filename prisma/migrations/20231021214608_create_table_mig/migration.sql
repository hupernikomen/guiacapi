/*
  Warnings:

  - You are about to drop the column `ownerId` on the `users` table. All the data in the column will be lost.
  - Added the required column `userID` to the `owners` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_ownerId_fkey";

-- DropIndex
DROP INDEX "users_ownerId_key";

-- AlterTable
ALTER TABLE "owners" ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "ownerId";

-- AddForeignKey
ALTER TABLE "owners" ADD CONSTRAINT "owners_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
