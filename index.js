require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./Models/models");
const cors = require("cors");
const router = require("./routes/index");
const ErrorHandle = require("./middleware/ErrorHandleMiddleware");

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.static("./index.js"));
// Слушатель на CORS
app.use(cors());

app.use(express.json());

app.use("/api", router);

app.get("/api", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.js"));
});
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
