const express = require("express");
const app = express();
let db = require("./database.js");

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});

app.get("/api/anime", (req, res) =>{

    let sql = "select * from anime";
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});

app.get("/api/anime/:id", (req, res) =>{

    let sql = "select * from anime where id = ?";
    let params = [req.params.id]
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});

app.get("/api/user", (req, res) =>{

    let sql = "select * from users";
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});

app.get("/api/user/:id", (req, res) =>{

    let sql = "select * from users where id = ?";
    let params = [req.params.id]
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});

app.get("/api/actor", (req, res) =>{

    let sql = "select * from voice_actor";
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});

app.get("/api/actor/:id", (req, res) =>{

    let sql = "select * from voice_actor where id = ?";
    let params = [req.params.id]
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});

/* N:N Relationship: Query all the anime watched by a specific user */

/* N:N Relationship: Query all the users who have watched a specific anime */

/* N:N Relationship: Query all the voice actors of an anime */

/* N:N Relationship: Query all the animes with a specific voice actor */