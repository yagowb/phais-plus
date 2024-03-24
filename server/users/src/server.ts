import express from "express";

const PORT = process.env.PORT ?? 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`🚀 User server is running on PORT ${PORT}.`);
});
