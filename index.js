const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const customerDB = require("./customerDB");
const productDB = require("./productDB");
const customerModels = require("./models/customerModels");
const productModels = require("./models/productModels");
const cors = require("cors");
const router = require("./routers/router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Started!");
});

const start = async () => {
  await customerDB.authenticate();
  await customerDB.sync();
  await productDB.authenticate();
  await productDB.sync();
  app.listen(port, () => {
    console.log(`Started on ${port}!`);
  });
};

start();
