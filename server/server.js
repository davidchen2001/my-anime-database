const express = require("express");
const app = express();
let db = require("./database.js");

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});