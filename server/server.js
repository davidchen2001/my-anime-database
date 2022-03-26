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

app.get("/api/anime/:title", (req, res) =>{

    let sql = "select * from anime where title = ?";
    let params = [req.params.title]
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

    let sql = "select * from user";
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

app.get("/api/user/:username", (req, res) =>{

    let sql = "select * from user where username = ?";
    let params = [req.params.username]
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});

app.post("/api/login", (req, res) =>{

    let sql = "select username, password from user where username = ? and password = ?";
    let {username, password} = req.body;

    db.all(sql, username, password, (err, rows) => {
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

app.get("/api/actor/:name", (req, res) =>{

    let sql = "select * from voice_actor where name = ?";
    let params = [req.params.name]
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

app.get("/api/watched/:username", (req, res) =>{

    let sql = "select * from (watched join user where username = ?)";
    let params = [req.params.username]
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});

/* N:N Relationship: Query all the users who have watched a specific anime */

app.get("/api/watched/:title", (req, res) =>{

    let sql = "select * from (watched join anime where anime_title = ?)";
    let params = [req.params.title]
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});

/* N:N Relationship: Query all the voice actors of an anime */

app.get("/api/voiced/:title", (req, res) =>{

    let sql = "select * from (voiced join anime where anime_title = ?)";
    let params = [req.params.title]
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});

/* N:N Relationship: Query all the animes with a specific voice actor */

app.get("/api/voiced/:name", (req, res) =>{

    let sql = "select * from (voiced join anime where actor_name = ?)";
    let params = [req.params.name]
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});

/* Secondary Query: Query all of the voice actors and their character names of a specific anime */

app.get("/api/characters/:username", (req, res) =>{

    let sql = "select actor_name, character_name from (select * from (anime join watched where username = ?))";
    let params = [req.params.username]
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});