-- CreateTable
CREATE TABLE "registers" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "registers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "cpf" TEXT,
    "registration" TEXT,
    "full_name" TEXT,
    "birth_date" TIMESTAMP(3),
    "phone" TEXT,
    "email" TEXT,
    "address" TEXT,
    "job_title" TEXT,
    "admission_date" TIMESTAMP(3),
    "last_login" TIMESTAMP(3),
    "observation" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medication_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "medication_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "active_principles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "active_principles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pharmacological_groups" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "pharmacological_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "therapeuthic_indications" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "therapeuthic_indications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pregnancy_risks" (
    "id" TEXT NOT NULL,
    "letter" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "pregnancy_risks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prescriptions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "prescriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "laboratories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "laboratories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medications" (
    "id" TEXT NOT NULL,
    "medication_type_id" TEXT NOT NULL,
    "active_principle_id" TEXT NOT NULL,
    "pregnancy_risk_id" TEXT NOT NULL,
    "prescription_id" TEXT,
    "laboratory_id" TEXT NOT NULL,
    "approvation_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "medications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "priority" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "priority_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statuses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "statuses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Request" (
    "id" TEXT NOT NULL,
    "hospital_id" TEXT NOT NULL,
    "medication_id" TEXT NOT NULL,
    "priority_id" TEXT NOT NULL,
    "status_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MedicationToPharmacologicalGroup" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MedicationToTherapeuthicIndication" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EquivalentGenerics" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EquivalentSimilars" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "registers_cnpj_key" ON "registers"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "registers_email_key" ON "registers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cnpj_key" ON "users"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "medication_types_name_key" ON "medication_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "active_principles_name_key" ON "active_principles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "pharmacological_groups_name_key" ON "pharmacological_groups"("name");

-- CreateIndex
CREATE UNIQUE INDEX "therapeuthic_indications_name_key" ON "therapeuthic_indications"("name");

-- CreateIndex
CREATE UNIQUE INDEX "laboratories_name_key" ON "laboratories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_MedicationToPharmacologicalGroup_AB_unique" ON "_MedicationToPharmacologicalGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_MedicationToPharmacologicalGroup_B_index" ON "_MedicationToPharmacologicalGroup"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MedicationToTherapeuthicIndication_AB_unique" ON "_MedicationToTherapeuthicIndication"("A", "B");

-- CreateIndex
CREATE INDEX "_MedicationToTherapeuthicIndication_B_index" ON "_MedicationToTherapeuthicIndication"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EquivalentGenerics_AB_unique" ON "_EquivalentGenerics"("A", "B");

-- CreateIndex
CREATE INDEX "_EquivalentGenerics_B_index" ON "_EquivalentGenerics"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EquivalentSimilars_AB_unique" ON "_EquivalentSimilars"("A", "B");

-- CreateIndex
CREATE INDEX "_EquivalentSimilars_B_index" ON "_EquivalentSimilars"("B");

-- AddForeignKey
ALTER TABLE "medications" ADD CONSTRAINT "medications_medication_type_id_fkey" FOREIGN KEY ("medication_type_id") REFERENCES "medication_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medications" ADD CONSTRAINT "medications_active_principle_id_fkey" FOREIGN KEY ("active_principle_id") REFERENCES "active_principles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medications" ADD CONSTRAINT "medications_pregnancy_risk_id_fkey" FOREIGN KEY ("pregnancy_risk_id") REFERENCES "pregnancy_risks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medications" ADD CONSTRAINT "medications_prescription_id_fkey" FOREIGN KEY ("prescription_id") REFERENCES "prescriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medications" ADD CONSTRAINT "medications_laboratory_id_fkey" FOREIGN KEY ("laboratory_id") REFERENCES "laboratories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_hospital_id_fkey" FOREIGN KEY ("hospital_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_medication_id_fkey" FOREIGN KEY ("medication_id") REFERENCES "medications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_priority_id_fkey" FOREIGN KEY ("priority_id") REFERENCES "priority"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "statuses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicationToPharmacologicalGroup" ADD CONSTRAINT "_MedicationToPharmacologicalGroup_A_fkey" FOREIGN KEY ("A") REFERENCES "medications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicationToPharmacologicalGroup" ADD CONSTRAINT "_MedicationToPharmacologicalGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "pharmacological_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicationToTherapeuthicIndication" ADD CONSTRAINT "_MedicationToTherapeuthicIndication_A_fkey" FOREIGN KEY ("A") REFERENCES "medications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicationToTherapeuthicIndication" ADD CONSTRAINT "_MedicationToTherapeuthicIndication_B_fkey" FOREIGN KEY ("B") REFERENCES "therapeuthic_indications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquivalentGenerics" ADD CONSTRAINT "_EquivalentGenerics_A_fkey" FOREIGN KEY ("A") REFERENCES "medications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquivalentGenerics" ADD CONSTRAINT "_EquivalentGenerics_B_fkey" FOREIGN KEY ("B") REFERENCES "medications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquivalentSimilars" ADD CONSTRAINT "_EquivalentSimilars_A_fkey" FOREIGN KEY ("A") REFERENCES "medications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquivalentSimilars" ADD CONSTRAINT "_EquivalentSimilars_B_fkey" FOREIGN KEY ("B") REFERENCES "medications"("id") ON DELETE CASCADE ON UPDATE CASCADE;
