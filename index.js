import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
