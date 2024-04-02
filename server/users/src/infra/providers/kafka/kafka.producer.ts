import { kafka } from ".";

export class KafkaSendMessage {
  async execute(topic: string, payload: any) {
    const producer = kafka.producer();
    await producer.connect();

    console.log(`SENDING MESSAGE TO TOPIC: ${topic}`);
    console.log(`MESSAGE: ${JSON.stringify(payload)}`);

    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(payload) }],
    });

    console.log("MESSAGE SENT");

    await producer.disconnect();
  }
}
