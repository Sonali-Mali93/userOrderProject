const express = require("express");
const { json } = require("express");
const mongoose = require("mongoose");
const router = require('./Routes/route')
const app = express();
app.use(express.json());
const PORT = 3000;

mongoose
  .connect(
    "mongodb+srv://demoDB:Twite_34@sandbox.xdes7.mongodb.net/userOrderDB"
  )
  .then(() => {
    console.log("mongodb database is connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", router);

app.listen(PORT, () => {
  console.log("Server is listining to Port:", PORT);
});
