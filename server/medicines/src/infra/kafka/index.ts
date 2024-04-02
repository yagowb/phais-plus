import { Kafka, logLevel } from "kafkajs";

const kafka = new Kafka({
  brokers: ["pet-foxhound-5150-us1-kafka.upstash.io:9092"],
  ssl: true,
  sasl: {
    mechanism: "scram-sha-256",
    username: process.env.KAFKA_USERNAME ?? "",
    password: process.env.KAFKA_PASSWORD ?? "",
  },
  logLevel: logLevel.ERROR,
});

export { kafka };
