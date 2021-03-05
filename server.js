const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;

app
  .use(express.static(path.join(__dirname, "/client/build")))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
