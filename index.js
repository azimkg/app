require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./Models/models");
const cors = require("cors");
const router = require("./routes/index");
const ErrorHandle = require("./middleware/ErrorHandleMiddleware");

const PORT = process.env.PORT || 8000;

const app = express();

// Слушатель на CORS
app.use(cors());

app.use(express.json());

app.use("/api", router);

// Обработка ошибок
app.use(ErrorHandle);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Start server ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
