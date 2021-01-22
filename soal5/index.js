const express = require("express");
const bodyParser = require("body-parser");
const { addLog } = require("./lib");

const app = express();
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  const logData = {
    counter: req.body.counter,
    "X-RANDOM": req.headers["x-random"],
  };

  const message = `[${new Date().toISOString()}] Success: ${
    req.method
  } ${fullUrl} ${JSON.stringify(logData)}`;
  addLog("server.log", message);
  res.sendStatus(201);
});

app.listen(3000, () => {
  console.log("server running in http://localhost:3000");
});
