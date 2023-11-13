-- AlterTable
ALTER TABLE "registers" ADD COLUMN     "disapproval_reason" TEXT,
ADD COLUMN     "disapproved" BOOLEAN NOT NULL DEFAULT false;
