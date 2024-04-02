import { kafka } from "./kafka";

export const kafkaConsumer = async (topic: string) => {
  const consumer = kafka.consumer({ groupId: "request-app" });
  await consumer.connect();

  await consumer.subscribe({ topic, fromBeginning: true });

  return consumer;
};
