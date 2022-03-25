const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./anime.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) 
    {
        console.error(err.message);
    }
    else
    {
        console.log("Connected to the anime database");
        db.run(`CREATE TABLE voice_actor(
                    name text PRIMARY KEY
                );
                CREATE TABLE voiced(
                    actor_name text,
                    anime_id INTEGER,
                    character_name text,
                    primary key(actor_name, anime_id)
                );
                CREATE TABLE anime(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title text,
                    genre text,
                    studio text
                );
                CREATE TABLE watched(
                    anime_id INTEGER,
                    username text,
                    primary key(anime_id, username)
                );
                CREATE TABLE user(
                    username text PRIMARY KEY,
                    name text,
                    password text
                );
                `,
            (err) => {
                if (err)
                {
                    console.log("Table already created");                
                }
                else 
                {
                    console.log("Table created");

                    const anime_insert = "INSERT into anime (title, genre, studio) values (?,?,?)";

                    const voiceActor_insert = "INSERT into voice_actor values (?)";

                    const voiced_insert = "INSERT into voiced values (?, ?, ?)";

                    const user_insert = "INSERT into user values (?, ?, ?)";

                    const watched_insert = "INSERT into watched values (?, ?)";
                }
            });
    }
});

module.exports = db;