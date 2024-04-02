/*
  Warnings:

  - Added the required column `external_id` to the `hospitals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `external_id` to the `medicines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hospitals" ADD COLUMN     "external_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "medicines" ADD COLUMN     "external_id" TEXT NOT NULL;
