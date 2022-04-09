const express = require("express");
const app = express();
let db = require("./database.js");

const PORT = 5000;

app.use(express.json());

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

app.get("/api/watched/user/:username", (req, res) =>{

    let sql = "select anime_title from (watched join user on (watched.username = user.username)) where user.username = ?";
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

app.get("/api/watched/anime/:title", (req, res) =>{

    let sql = "select anime_title, username from (watched join anime on (watched.anime_title = anime.title)) where anime.title = ?";
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

app.get("/api/voiced/anime/:title", (req, res) =>{

    let sql = "select actor_name, character_name from (voiced join anime on (voiced.anime_title = anime.title)) where anime_title = ?";
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

app.get("/api/voiced/actor/:name", (req, res) =>{

    let sql = "select anime_title from (voiced join voice_actor on (voiced.actor_name = voice_actor.name)) where actor_name = ?";
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

/* Secondary Query: Query all of the voice actors and then their character names */

app.get("/api/characters/:actor", (req, res) =>{

    let sql = "select character_name from (voiced join (select name from voice_actor) on (voiced.actor_name = name)) where actor_name = ?";
    let params = [req.params.actor]
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});