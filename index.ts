const express = require("express");
const bodyParser = require("body-parser");
const app = express();

import persons from "./persons";

app.use(bodyParser());

app.get("/", persons.read);

app.post("/create", persons.create);

app.listen(3000, () => console.log("Servidor sendo executado na porta 3000"));
