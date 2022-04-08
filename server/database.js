const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./anime.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) 
    {
        console.error(err.message);
    }
    else
    {
        console.log("Connected to the anime database");
        db.run(`
                CREATE TABLE anime(
                    title text PRIMARY KEY,
                    genre text,
                    studio text
                )
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

                    //33 anime

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
                    db.run(anime_insert, ["No Game No Life", "Isekai, Fantasy, Science Fiction", "Madhouse"]);
                    db.run(anime_insert, ["The Promised Neverland", "Dark Fantasy, Science Fiction, Thriller", "CloverWorks"]);
                }
            });
    }
});

db.run(`
        CREATE TABLE voice_actor(
            name text PRIMARY KEY
        )
        `,
        (err) => {
            if (err)
            {
                console.log("Table already created");                
            }
            else 
            {
                console.log("Table created");

                const voiceActor_insert = "INSERT into voice_actor values (?)";

                //9 Voice Actors - All voiced multiple characters

                db.run(voiceActor_insert, "Kana Hanazawa"); 
                db.run(voiceActor_insert, "Yui Ishikawa");
                db.run(voiceActor_insert, "Natsuki Hanae");
                db.run(voiceActor_insert, "Sora Amamiya");
                db.run(voiceActor_insert, "Rie Takahashi");
                db.run(voiceActor_insert, "Ai Kayano");
                db.run(voiceActor_insert, "Yoshitsugu Matsuoka");
                db.run(voiceActor_insert, "Ayane Sakura");
                db.run(voiceActor_insert, "Inori Minase");
            }
});

db.run(`
        CREATE TABLE voiced(
            actor_name text,
            anime_title text,
            character_name text,
            primary key(actor_name, anime_title)
        )
        `,
        (err) => {
            if (err)
            {
                console.log("Table already created");                
            }
            else 
            {
                console.log("Table created");

                const voiced_insert = "INSERT into voiced values (?, ?, ?)";

                //38 relationships 

                db.run(voiced_insert, ["Kana Hanazawa", "Angel Beats", "Kanade Tachibana"]);
                db.run(voiced_insert, ["Kana Hanazawa", "The Quintessential Quintuplets", "Ichika Nakano"]);
                db.run(voiced_insert, ["Kana Hanazawa", "Demon Slayer: Kimetsu no Yaiba", "Mitsuri Kanroji"]);
                db.run(voiced_insert, ["Kana Hanazawa", "The Garden of Words", "Yukari Yukino"]);
                db.run(voiced_insert, ["Kana Hanazawa", "Your Name", "Yukari Yukino"]);

                db.run(voiced_insert, ["Yui Ishikawa", "Violet Evergarden", "Violet Evergarden"]);
                db.run(voiced_insert, ["Yui Ishikawa", "Attack on Titan", "Mikasa Ackerman"]);
                db.run(voiced_insert, ["Yui Ishikawa", "A Silent Voice", "Miyoko Sahara"]);

                db.run(voiced_insert, ["Natsuki Hanae", "Demon Slayer: Kimetsu no Yaiba", "Tanjiro Kamado"]);
                db.run(voiced_insert, ["Natsuki Hanae", "Your Lie In April", "Kōsei Arima"]);

                db.run(voiced_insert, ["Sora Amamiya", "Plastic Memories", "Isla"]);
                db.run(voiced_insert, ["Sora Amamiya", "KonoSuba: God's Blessing on this Wonderful World!", "Aqua"]);
                db.run(voiced_insert, ["Sora Amamiya", "Rascal Does Not Dream of Bunny Girl Senpai", "Uzuki Hirokawa"]);
                db.run(voiced_insert, ["Sora Amamiya", "Rent-A-Girlfriend", "Chizuru Mizuhara"]);

                db.run(voiced_insert, ["Rie Takahashi", "Rent-A-Girlfriend", "Sumi Sakurasawa"]);
                db.run(voiced_insert, ["Rie Takahashi", "KonoSuba: God's Blessing on this Wonderful World!", "Megumin"]);
                db.run(voiced_insert, ["Rie Takahashi", "Re:Zero - Starting Life in Another World", "Emilia, Satella"]);

                db.run(voiced_insert, ["Ai Kayano", "KonoSuba: God's Blessing on this Wonderful World!", "Darkness"]);
                db.run(voiced_insert, ["Ai Kayano", "Anohana: The Flower We Saw That Day", "Menma"]);
                db.run(voiced_insert, ["Ai Kayano", "Golden Time", "Linda Hayashida"]);
                db.run(voiced_insert, ["Ai Kayano", "No Game No Life", "Shiro"]);
                db.run(voiced_insert, ["Ai Kayano", "Your Lie in April", "Nagi Aiza"]);
                db.run(voiced_insert, ["Ai Kayano", "Demon Slayer: Kimetsu no Yaiba", "Kanae Kocho"]);

                db.run(voiced_insert, ["Yoshitsugu Matsuoka", "Demon Slayer: Kimetsu no Yaiba", "Inosuke Hashibira"]);
                db.run(voiced_insert, ["Yoshitsugu Matsuoka", "The Quintessential Quintuplets", "Fūtarō Uesugi"]);
                db.run(voiced_insert, ["Yoshitsugu Matsuoka", "Puella Magi Madoka Magica", "Nakazawa"]);
                db.run(voiced_insert, ["Yoshitsugu Matsuoka", "No Game No Life", "Sora"]);
                db.run(voiced_insert, ["Yoshitsugu Matsuoka", "Re:Zero - Starting Life in Another World", "Petelgeuse Romanee-Conti"]);

                db.run(voiced_insert, ["Ayane Sakura", "Your Lie in April", "Tsubaki Sawabe"]);
                db.run(voiced_insert, ["Ayane Sakura", "The Quintessential Quintuplets", "Yotsuba Nakano"]);
                db.run(voiced_insert, ["Ayane Sakura", "Attack on Titan", "Gabi Braun"]);
                db.run(voiced_insert, ["Ayane Sakura", "Hotarubi no Mori e", "Hotaru Takegawa"]);
                db.run(voiced_insert, ["Ayane Sakura", "Weathering with You", "Ayane Hanazawa"]);

                db.run(voiced_insert, ["Inori Minase", "Your Lie in April", "Koharu Seto"]);
                db.run(voiced_insert, ["Inori Minase", "Re:Zero - Starting Life in Another World", "Rem"]);
                db.run(voiced_insert, ["Inori Minase", "Rascal Does Not Dream of Bunny Girl Senpai", "Shoko Makinohara"]);
                db.run(voiced_insert, ["Inori Minase", "The Quintessential Quintuplets", "Itsuki Nakano"]);
                db.run(voiced_insert, ["Inori Minase", "Made in Abyss", "Prushka"]);
            }
});

db.run(`
        CREATE TABLE watched(
            anime_title text,
            username text,
            primary key(anime_title, username)
        )
        `,
        (err) => {
        if (err)
        {
            console.log("Table already created");                
        }
        else 
        {
            console.log("Table created");

            const watched_insert = "INSERT into watched values (?, ?)";

            //21 relationships

            db.run(watched_insert, ["No Game No Life", "David Chen"]);
            db.run(watched_insert, ["The Promised Neverland", "David Chen"]);
            db.run(watched_insert, ["Your Lie In April", "David Chen"]);
            db.run(watched_insert, ["Attack on Titan", "David Chen"]);
            db.run(watched_insert, ["The Quintessential Quintuplets", "David Chen"]);
            db.run(watched_insert, ["Rascal Does Not Dream of Bunny Girl Senpai", "David Chen"]);
            db.run(watched_insert, ["Angel Beats", "David Chen"]);
            db.run(watched_insert, ["Your Name", "David Chen"]);
            db.run(watched_insert, ["KonoSuba: God's Blessing on this Wonderful World!", "David Chen"]);
            db.run(watched_insert, ["Anohana: The Flower We Saw That Day", "David Chen"]);
                    
            db.run(watched_insert, ["No Game No Life", "Eric Huang"]);
            db.run(watched_insert, ["The Quintessential Quintuplets", "Eric Huang"]);
            db.run(watched_insert, ["Angel Beats", "Eric Huang"]);
            db.run(watched_insert, ["Your Name", "Eric Huang"]);
            db.run(watched_insert, ["KonoSuba: God's Blessing on this Wonderful World!", "Eric Huang"]);
            db.run(watched_insert, ["Anohana: The Flower We Saw That Day", "Eric Huang"]);

            db.run(watched_insert, ["Demon Slayer: Kimetsu no Yaiba", "Eden Chan"]);
            db.run(watched_insert, ["Your Lie In April", "Eden Chan"]);
            db.run(watched_insert, ["Attack on Titan", "Eden Chan"]);
            db.run(watched_insert, ["Rascal Does Not Dream of Bunny Girl Senpai", "Eden Chan"]);
            db.run(watched_insert, ["Your Name", "Eden Chan"]);
        }
});

db.run(`
        CREATE TABLE user(
            username text PRIMARY KEY,
            name text,
            password text
        )
        `,
        (err) => {
            if (err)
            {
                console.log("Table already created");                
            }
            else 
            {
                console.log("Table created");
    
                const user_insert = "INSERT into user values (?, ?, ?)";
    
                //3 users
    
                db.run(user_insert, ["David Chen, David Chen, password"]);
                db.run(user_insert, ["Eric Huang, Eric Huang, password"]);
                db.run(user_insert, ["Eden Chan, Eden Chan, password"]);
            }       
});

module.exports = db;