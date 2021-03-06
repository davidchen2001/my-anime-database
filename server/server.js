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

app.post("/api/anime", (req, res) =>{

    const data = {
        title: req.body.title,
        genre: req.body.genre,
        studio: req.body.studio 
    }

    let sql = "INSERT into anime (title, genre, studio) values (?,?,?)";
    let params = [data.title, data.genre, data.studio];

    db.run(sql, params, function(err, result) {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }
        res.json({
            "message": "success",
            "data": data,
        });
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

app.post("/api/actor", (req, res) =>{

    const data = {
        name: req.body.name 
    }

    let sql = "INSERT into voice_actor values (?)";
    let params = [data.name];

    db.run(sql, params, function(err, result) {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }
        res.json({
            "message": "success",
            "data": data,
        });
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

/* Secondary Query: Query all of the voice actors and then their character names */

app.get("/api/characters/:actor", (req, res) =>{

    let sql = "select anime_title, character_name from (voiced join (select name from voice_actor) on (voiced.actor_name = name)) where actor_name = ?";
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

app.get("/api/songs", (req, res) =>{

    let sql = "select * from opening";
    let params = [];
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});

app.post("/api/songs", (req, res) =>{

    const data = {
        anime_title: req.body.anime,
        title: req.body.title,
        season: req.body.season
    }

    let sql = "INSERT into opening values (?, ?, ?)";
    let params = [data.anime_title, data.title, data.season];

    db.run(sql, params, function(err, result) {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }
        res.json({
            "message": "success",
            "data": data,
        });
    });
});

app.get("/api/songs/:title", (req, res) =>{

    let sql = "select * from opening where title = ?";
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


app.get("/api/songs/anime/:anime_title", (req, res) =>{

    let sql = "select * from opening where anime_title = ?";
    let params = [req.params.anime_title]
    db.all(sql, params, (err, rows) => {
        if (err) 
        {
            res.status(400).json(err);
            console.log(err);
        }

        res.status(200).json(rows);
    });
});