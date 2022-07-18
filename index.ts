const express = require("express");
const app = express();

import persons from "./persons";

app.get("/", persons.read);

app.listen(3000, () => console.log("Servidor sendo executado na porta 3000"));
