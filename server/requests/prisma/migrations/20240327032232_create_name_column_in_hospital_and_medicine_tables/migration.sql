/*
  Warnings:

  - Added the required column `name` to the `hospitals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `medicines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hospitals" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "medicines" ADD COLUMN     "name" TEXT NOT NULL;
