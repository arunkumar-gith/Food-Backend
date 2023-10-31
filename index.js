const express = require("express");
const app = express();
var cors = require("cors");
const PORT = 5000;
const db = require("./db");
db();
app.use(cors());

app.use(express.json());

app.use("/api", require("./Routes/createUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
