const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/config");
const Routes = require("./router/router");
const cors = require("cors");
require("dotenv").config();

//MIDDLEWARES
app.use(express.json());
app.use(cors());

app.use("/", Routes);
//DATABASE CONNECTION
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB CONNECTED SUCCESSFULLY"))
  .catch((err) => console.log(err));

app.listen(config.PORT, () => console.log(`http://localhost:${config.PORT}`));
