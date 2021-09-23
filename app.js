const express = require("express");
const db = require("./database");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 7000;

db();

app.use(morgan("tiny"));
app.use(express.json());

app.listen(port, () => console.log(`Server is running on port ${port}`));
