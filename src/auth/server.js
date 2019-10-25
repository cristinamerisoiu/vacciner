const express = require("express");
const app = express();
// const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

// dotenv.config();

//Connect to DB
mongoose.connect(
  "cristinam:galusca1@cluster0-nf7le.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => console.log("connected to db!")
);

//Midlleware
app.use(express.json());

//Routes middlewares
app.use("/api/user", authRoute);

app.listen(4000, () => console.log("server is up and running"));
