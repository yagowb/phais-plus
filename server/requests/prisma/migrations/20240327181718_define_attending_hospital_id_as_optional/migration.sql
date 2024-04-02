-- DropForeignKey
ALTER TABLE "requests" DROP CONSTRAINT "requests_attending_hospital_id_fkey";

-- AlterTable
ALTER TABLE "requests" ALTER COLUMN "attending_hospital_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_attending_hospital_id_fkey" FOREIGN KEY ("attending_hospital_id") REFERENCES "hospitals"("id") ON DELETE SET NULL ON UPDATE CASCADE;
