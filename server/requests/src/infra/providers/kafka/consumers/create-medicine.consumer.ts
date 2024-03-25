import { prismaClient } from "../../../database/prismaClient";
import { kafkaConsumer } from "../../kafka.consumer";

type MedicineConsumer = { id: string };

export const createMedicineConsumer = async () => {
  const topic = "medicine-created";

  console.log(`CONSUMER: ${topic}`);

  const consumer = await kafkaConsumer(topic);
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString();

      console.log(`RECEIVED MESSAGE: ${messageToString}`);

      const medicine = JSON.parse(messageToString) as MedicineConsumer;
      await prismaClient.medicine.create({
        data: { external_id: medicine.id },
      });

      console.log(`MEDICINE CREATED: ${medicine.id} (EXTERNAL ID)`);
    },
  });
};

createMedicineConsumer();
