-- DropForeignKey
ALTER TABLE "medications" DROP CONSTRAINT "medications_active_principle_id_fkey";

-- DropForeignKey
ALTER TABLE "medications" DROP CONSTRAINT "medications_laboratory_id_fkey";

-- DropForeignKey
ALTER TABLE "medications" DROP CONSTRAINT "medications_medication_type_id_fkey";

-- DropForeignKey
ALTER TABLE "medications" DROP CONSTRAINT "medications_pregnancy_risk_id_fkey";

-- AlterTable
ALTER TABLE "medications" ALTER COLUMN "medication_type_id" DROP NOT NULL,
ALTER COLUMN "active_principle_id" DROP NOT NULL,
ALTER COLUMN "pregnancy_risk_id" DROP NOT NULL,
ALTER COLUMN "laboratory_id" DROP NOT NULL,
ALTER COLUMN "approvation_date" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "medications" ADD CONSTRAINT "medications_medication_type_id_fkey" FOREIGN KEY ("medication_type_id") REFERENCES "medication_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medications" ADD CONSTRAINT "medications_active_principle_id_fkey" FOREIGN KEY ("active_principle_id") REFERENCES "active_principles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medications" ADD CONSTRAINT "medications_pregnancy_risk_id_fkey" FOREIGN KEY ("pregnancy_risk_id") REFERENCES "pregnancy_risks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medications" ADD CONSTRAINT "medications_laboratory_id_fkey" FOREIGN KEY ("laboratory_id") REFERENCES "laboratories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
