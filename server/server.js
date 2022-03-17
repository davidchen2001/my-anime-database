const express = require("express");
const app = express();

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database('./anime.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    else
    {
        console.log("Connected to the anime database");
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});