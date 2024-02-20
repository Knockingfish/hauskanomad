const express = require("express");
console.log("Working 1");
const mongoose = require("mongoose");
console.log("Working 2");
const cors = require("cors");
console.log("Working 3");
const app = express();
console.log("Working 4");
require("dotenv").config();
console.log("Working 5");
const cookieParser = require("cookie-parser");
console.log("Working 6");
const authRoute = require('./Routes/AuthRoute.js');
console.log("Working 7");
const { MONGO_URL, PORT } = process.env;
console.log("Working 8");

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
console.log("Working 9");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
console.log("Working 10");

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);

console.log("Working 11");
