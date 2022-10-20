const express = require("express");
const path = require("path");
require("dotenv").config();
const myRouter = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", myRouter());

//public folder config
app.use(express.static(path.join(__dirname, "public")));

//ejs config
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
