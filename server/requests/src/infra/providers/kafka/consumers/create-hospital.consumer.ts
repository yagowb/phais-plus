import { prismaClient } from "../../../database/prismaClient";
import { kafkaConsumer } from "../../kafka.consumer";

type UserConsumer = { id: string };

export const createHospitalConsumer = async () => {
  const topic = "user-created";

  console.log(`CONSUMER: ${topic}`);

  const consumer = await kafkaConsumer(topic);
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString();

      console.log(`RECEIVED MESSAGE: ${messageToString}`);

      const user = JSON.parse(messageToString) as UserConsumer;
      await prismaClient.hospital.create({ data: { external_id: user.id } });

      console.log(`HOSPITAL CREATED: ${user.id} (EXTERNAL ID)`);
    },
  });
};

createHospitalConsumer();
