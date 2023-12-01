/*
  Warnings:

  - Added the required column `description` to the `requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `due_date` to the `requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `return_date` to the `requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "requests" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "due_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "return_date" TIMESTAMP(3) NOT NULL;
