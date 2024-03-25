/*
  Warnings:

  - You are about to drop the `_MedicationToPharmacologicalGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MedicationToTherapeuthicIndication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `medication_types` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `medications` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EquivalentGenerics" DROP CONSTRAINT "_EquivalentGenerics_A_fkey";

-- DropForeignKey
ALTER TABLE "_EquivalentGenerics" DROP CONSTRAINT "_EquivalentGenerics_B_fkey";

-- DropForeignKey
ALTER TABLE "_EquivalentSimilars" DROP CONSTRAINT "_EquivalentSimilars_A_fkey";

-- DropForeignKey
ALTER TABLE "_EquivalentSimilars" DROP CONSTRAINT "_EquivalentSimilars_B_fkey";

-- DropForeignKey
ALTER TABLE "_MedicationToPharmacologicalGroup" DROP CONSTRAINT "_MedicationToPharmacologicalGroup_A_fkey";

-- DropForeignKey
ALTER TABLE "_MedicationToPharmacologicalGroup" DROP CONSTRAINT "_MedicationToPharmacologicalGroup_B_fkey";

-- DropForeignKey
ALTER TABLE "_MedicationToTherapeuthicIndication" DROP CONSTRAINT "_MedicationToTherapeuthicIndication_A_fkey";

-- DropForeignKey
ALTER TABLE "_MedicationToTherapeuthicIndication" DROP CONSTRAINT "_MedicationToTherapeuthicIndication_B_fkey";

-- DropForeignKey
ALTER TABLE "medications" DROP CONSTRAINT "medications_active_principle_id_fkey";

-- DropForeignKey
ALTER TABLE "medications" DROP CONSTRAINT "medications_laboratory_id_fkey";

-- DropForeignKey
ALTER TABLE "medications" DROP CONSTRAINT "medications_medication_type_id_fkey";

-- DropForeignKey
ALTER TABLE "medications" DROP CONSTRAINT "medications_pregnancy_risk_id_fkey";

-- DropForeignKey
ALTER TABLE "medications" DROP CONSTRAINT "medications_prescription_id_fkey";

-- DropTable
DROP TABLE "_MedicationToPharmacologicalGroup";

-- DropTable
DROP TABLE "_MedicationToTherapeuthicIndication";

-- DropTable
DROP TABLE "medication_types";

-- DropTable
DROP TABLE "medications";

-- CreateTable
CREATE TABLE "medicine_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "medicine_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicines" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "medicine_type_id" TEXT,
    "active_principle_id" TEXT,
    "pregnancy_risk_id" TEXT,
    "prescription_id" TEXT,
    "laboratory_id" TEXT,
    "approvation_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "medicines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MedicineToPharmacologicalGroup" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MedicineToTherapeuthicIndication" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "medicine_types_name_key" ON "medicine_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_MedicineToPharmacologicalGroup_AB_unique" ON "_MedicineToPharmacologicalGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_MedicineToPharmacologicalGroup_B_index" ON "_MedicineToPharmacologicalGroup"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MedicineToTherapeuthicIndication_AB_unique" ON "_MedicineToTherapeuthicIndication"("A", "B");

-- CreateIndex
CREATE INDEX "_MedicineToTherapeuthicIndication_B_index" ON "_MedicineToTherapeuthicIndication"("B");

-- AddForeignKey
ALTER TABLE "medicines" ADD CONSTRAINT "medicines_medicine_type_id_fkey" FOREIGN KEY ("medicine_type_id") REFERENCES "medicine_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicines" ADD CONSTRAINT "medicines_active_principle_id_fkey" FOREIGN KEY ("active_principle_id") REFERENCES "active_principles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicines" ADD CONSTRAINT "medicines_pregnancy_risk_id_fkey" FOREIGN KEY ("pregnancy_risk_id") REFERENCES "pregnancy_risks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicines" ADD CONSTRAINT "medicines_prescription_id_fkey" FOREIGN KEY ("prescription_id") REFERENCES "prescriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicines" ADD CONSTRAINT "medicines_laboratory_id_fkey" FOREIGN KEY ("laboratory_id") REFERENCES "laboratories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicineToPharmacologicalGroup" ADD CONSTRAINT "_MedicineToPharmacologicalGroup_A_fkey" FOREIGN KEY ("A") REFERENCES "medicines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicineToPharmacologicalGroup" ADD CONSTRAINT "_MedicineToPharmacologicalGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "pharmacological_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicineToTherapeuthicIndication" ADD CONSTRAINT "_MedicineToTherapeuthicIndication_A_fkey" FOREIGN KEY ("A") REFERENCES "medicines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicineToTherapeuthicIndication" ADD CONSTRAINT "_MedicineToTherapeuthicIndication_B_fkey" FOREIGN KEY ("B") REFERENCES "therapeuthic_indications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquivalentGenerics" ADD CONSTRAINT "_EquivalentGenerics_A_fkey" FOREIGN KEY ("A") REFERENCES "medicines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquivalentGenerics" ADD CONSTRAINT "_EquivalentGenerics_B_fkey" FOREIGN KEY ("B") REFERENCES "medicines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquivalentSimilars" ADD CONSTRAINT "_EquivalentSimilars_A_fkey" FOREIGN KEY ("A") REFERENCES "medicines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquivalentSimilars" ADD CONSTRAINT "_EquivalentSimilars_B_fkey" FOREIGN KEY ("B") REFERENCES "medicines"("id") ON DELETE CASCADE ON UPDATE CASCADE;
