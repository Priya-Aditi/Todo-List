const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
// using express.json() to get data into json format
app.use(express.json());
//PORT
const PORT = process.env.PORT || 5500;

//using cors
app.use(cors());

// Importing routes
const TodoItemRoute = require("./routes/todoItems");

//Lets connect to mongodb ..
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/", TodoItemRoute);

//Add Port and connect to server
app.listen(PORT, () => console.log("Server connected"));
