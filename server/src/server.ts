import express from "express";
import cors from "cors";

import { router as userRouter } from "./routes/users";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

app.listen(PORT, () => {
  return console.log(`🚀 Server is running on port ${PORT}!`);
});
