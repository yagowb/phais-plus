import "dotenv/config";
import express from "express";
import { router } from "./infra/routes";

const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`🚀 User server is running on PORT ${PORT}.`);
});
