import express from "express";

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  return console.log(`🚀 Server is running on port ${PORT}!`);
});
