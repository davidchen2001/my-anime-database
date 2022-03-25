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

                    //31 anime

                    db.run(anime_insert, ["Weathering With You", "Romance, Fantasy", "CoMix Wave Films"]);
                    db.run(anime_insert, ["Your Name", "Romance, Fantasy", "CoMix Wave Films"]);
                    db.run(anime_insert, ["Violet Evergarden", "Coming of Age, Romance, Fantasy", "Kyoto Animation"]);
                    db.run(anime_insert, ["Rascal Does Not Dream of Bunny Girl Senpai", "Psychological Drama, Romance, Supernatural", "CloverWorks"]);
                    db.run(anime_insert, ["Your Lie In April", "Romantic Drama", "A-1 Pictures"]);
                    db.run(anime_insert, ["Death Note", "Mystery, Phychological Thriller, Supernatural Thriller", "Madhouse"]);
                    db.run(anime_insert, ["Clannad", "Slice of Life, Romance", "Kyoto Animation"]);
                    db.run(anime_insert, ["Clannad After Story", "Slice of Life, Romance, Tragedy", "Kyoto Animation"]);
                    db.run(anime_insert, ["Anohana: The Flower We Saw That Day", "Coming of Age", "A-1 Pictures"]);
                    db.run(anime_insert, ["Grave of the Fireflies", "War, Drama, Tragedy", "Studio Ghibli"]);
                    db.run(anime_insert, ["KonoSuba: God's Blessing on this Wonderful World!", "Isekai, Fantasy Comedy", "Studio Deen"]);
                    db.run(anime_insert, ["Quintessential Quintuplets", "Harem, Romantic Comedy", "Tezuka Productions"]);
                    db.run(anime_insert, ["Spirited Away", "Fantasy, Adventure, Coming of Age, Mystery", "Studio Ghibli"]);
                    db.run(anime_insert, ["Puella Magi Madoka Magica", "Dark Fantasy, Psychological Thriller, Magical girl", "Shaft"]);
                    db.run(anime_insert, ["A Silent Voice", "Romance, Drama", "Kyoto Animation"]);
                    db.run(anime_insert, ["Kaguya-sama: Love Is War", "Psychological, Romantic Comedy, Slice of Life", "A-1 Pictures"]);
                    db.run(anime_insert, ["Angel Beats", "Fantasy", "P.A.Works"]);
                    db.run(anime_insert, ["Plastic Memories", "Comedy Drama, Romance, Science Fiction", "Doga Kobo"]);
                    db.run(anime_insert, ["I Want To Eat Your Pancreas", "Coming of Age, Drama, Romance", "Studio VOLN"]);
                    db.run(anime_insert, ["Golden Time", "Romantic Comedy", "J.C.Staff"]);
                    db.run(anime_insert, ["Tsuki ga Kirei", "Romance, Coming of Age", "Feel"]);
                    db.run(anime_insert, ["Re:Zero - Starting Life in Another World", "Isekai, Adventure, Dark Fantasy", "White Fox"]);
                    db.run(anime_insert, ["Demon Slayer: Kimetsu no Yaiba", "Action, Adventure, Dark Fantasy", "Ufotable"]);
                    db.run(anime_insert, ["Hotarubi No Mori e", "Romance, Supernatural", "Brain's Base"]);
                    db.run(anime_insert, ["Made in Abyss", "Adventure, Dark Fantasy, Science Fiction", "Kinema Citrus"]);
                    db.run(anime_insert, ["5 Centimeters per Second", "Romance, Drama, Melodrama", "CoMix Wave Inc."]);
                    db.run(anime_insert, ["Beastars", "Coming of Age, Drama, Fantasy", "Orange"]);
                    db.run(anime_insert, ["Rent A Girlfriend", "Romantic Comedy", "TMS Entertainment"]);
                    db.run(anime_insert, ["Domestic Girlfriend", "Romantic Drama", "Diomedéa"]);
                    db.run(anime_insert, ["The Garden of Woods", "Drama, Romance", "CoMix Wave Films"]);
                    db.run(anime_insert, ["Attack on Titan", "Action, Dark Fantasy, Post-apocalyptic", "Wit Studio, MAPPA"]);

                    const voiceActor_insert = "INSERT into voice_actor values (?)";

                    db.run(voiceActor_insert, "Kana Hanazawa"); 
                    db.run(voiceActor_insert, "Yui Ishikawa");
                    db.run(voiceActor_insert, "Natsuki Hanae");
                    db.run(voiceActor_insert, "Sora Amamiya");
                    db.run(voiceActor_insert, "Rie Takahashi");
                    db.run(voiceActor_insert, "Ai Kayano");
                    db.run(voiceActor_insert, "Yoshitsugu Matsuoka");
                    db.run(voiceActor_insert, "Ayane Sakura");
                    db.run(voiceActor_insert, "Inori Minase");


                    const voiced_insert = "INSERT into voiced values (?, ?, ?)";

                    const user_insert = "INSERT into user values (?, ?, ?)";

                    const watched_insert = "INSERT into watched values (?, ?)";
                }
            });
    }
});

module.exports = db;