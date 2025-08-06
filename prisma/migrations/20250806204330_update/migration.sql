/*
  Warnings:

  - You are about to drop the column `addres` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "addres",
ADD COLUMN     "address" JSON;
