import cors from "cors";
import express from "express";

import { router as userRouter } from "./routes/users";
import { router as registerRouter } from "./routes/registers";
import { router as medicationRouter } from "./routes/medications";
import { router as authRouter } from "./routes/auth";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/registers", registerRouter); 
app.use("/medications", medicationRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  return console.log(`🚀 Server is running on port ${PORT}!`);
});
