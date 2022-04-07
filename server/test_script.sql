CREATE TABLE voice_actor(
                    name text PRIMARY KEY
                );
                CREATE TABLE voiced(
                    actor_name text,
                    anime_title text,
                    character_name text,
                    primary key(actor_name, anime_title)
                );
                CREATE TABLE anime(
                    title text PRIMARY KEY ,
                    genre text,
                    studio text
                );
                CREATE TABLE watched(
                    anime_title text,
                    username text,
                    primary key(anime_title, username)
                );
                CREATE TABLE user(
                    username text PRIMARY KEY,
                    name text,
                    password text
                );

                INSERT into anime (title, genre, studio) values ("Weathering With You", "Romance, Fantasy", "CoMix Wave Films");
                INSERT into anime (title, genre, studio) values ("Your Name", "Romance, Fantasy", "CoMix Wave Films");
                INSERT into anime (title, genre, studio) values ("Violet Evergarden", "Coming of Age, Romance, Fantasy", "Kyoto Animation");
                INSERT into anime (title, genre, studio) values ("Rascal Does Not Dream of Bunny Girl Senpai", "Psychological Drama, Romance, Supernatural", "CloverWorks");
                INSERT into anime (title, genre, studio) values ("Your Lie In April", "Romantic Drama", "A-1 Pictures");
                INSERT into anime (title, genre, studio) values ("Death Note", "Mystery, Phychological Thriller, Supernatural Thriller", "Madhouse");
                INSERT into anime (title, genre, studio) values ("Clannad", "Slice of Life, Romance", "Kyoto Animation");
                INSERT into anime (title, genre, studio) values ("Clannad After Story", "Slice of Life, Romance, Tragedy", "Kyoto Animation");
                INSERT into anime (title, genre, studio) values ("Anohana: The Flower We Saw That Day", "Coming of Age", "A-1 Pictures");
                INSERT into anime (title, genre, studio) values ("Grave of the Fireflies", "War, Drama, Tragedy", "Studio Ghibli");
                INSERT into anime (title, genre, studio) values ("KonoSuba: God's Blessing on this Wonderful World!", "Isekai, Fantasy Comedy", "Studio Deen");
                INSERT into anime (title, genre, studio) values ("Quintessential Quintuplets", "Harem, Romantic Comedy", "Tezuka Productions");
                INSERT into anime (title, genre, studio) values ("Spirited Away", "Fantasy, Adventure, Coming of Age, Mystery", "Studio Ghibli");
                INSERT into anime (title, genre, studio) values ("Puella Magi Madoka Magica", "Dark Fantasy, Psychological Thriller, Magical girl", "Shaft");
                INSERT into anime (title, genre, studio) values ("A Silent Voice", "Romance, Drama", "Kyoto Animation");
                INSERT into anime (title, genre, studio) values ("Kaguya-sama: Love Is War", "Psychological, Romantic Comedy, Slice of Life", "A-1 Pictures");
                INSERT into anime (title, genre, studio) values ("Angel Beats", "Fantasy", "P.A.Works");
                INSERT into anime (title, genre, studio) values ("Plastic Memories", "Comedy Drama, Romance, Science Fiction", "Doga Kobo");
                INSERT into anime (title, genre, studio) values ("I Want To Eat Your Pancreas", "Coming of Age, Drama, Romance", "Studio VOLN");
                INSERT into anime (title, genre, studio) values ("Golden Time", "Romantic Comedy", "J.C.Staff");
                INSERT into anime (title, genre, studio) values ("Tsuki ga Kirei", "Romance, Coming of Age", "Feel");
                INSERT into anime (title, genre, studio) values ("Re:Zero - Starting Life in Another World", "Isekai, Adventure, Dark Fantasy", "White Fox");
                INSERT into anime (title, genre, studio) values ("Demon Slayer: Kimetsu no Yaiba", "Action, Adventure, Dark Fantasy", "Ufotable");
                INSERT into anime (title, genre, studio) values ("Hotarubi No Mori e", "Romance, Supernatural", "Brain's Base");
                INSERT into anime (title, genre, studio) values ("Made in Abyss", "Adventure, Dark Fantasy, Science Fiction", "Kinema Citrus");
                INSERT into anime (title, genre, studio) values ("5 Centimeters per Second", "Romance, Drama, Melodrama", "CoMix Wave Inc.");
                INSERT into anime (title, genre, studio) values ("Beastars", "Coming of Age, Drama, Fantasy", "Orange");
                INSERT into anime (title, genre, studio) values ("Rent A Girlfriend", "Romantic Comedy", "TMS Entertainment");
                INSERT into anime (title, genre, studio) values ("Domestic Girlfriend", "Romantic Drama", "Diomedéa");
                INSERT into anime (title, genre, studio) values ("The Garden of Woods", "Drama, Romance", "CoMix Wave Films");
                INSERT into anime (title, genre, studio) values ("Attack on Titan", "Action, Dark Fantasy, Post-apocalyptic", "Wit Studio, MAPPA");
                INSERT into anime (title, genre, studio) values ("No Game No Life", "Isekai, Fantasy, Science Fiction", "Madhouse");
                INSERT into anime (title, genre, studio) values ("The Promised Neverland", "Dark Fantasy, Science Fiction, Thriller", "CloverWorks");

                INSERT into voice_actor values ("Kana Hanazawa");
                INSERT into voice_actor values("Yui Ishikawa");
                INSERT into voice_actor values("Natsuki Hanae");
                INSERT into voice_actor values("Sora Amamiya");
                INSERT into voice_actor values("Rie Takahashi");
                INSERT into voice_actor values("Ai Kayano");
                INSERT into voice_actor values("Yoshitsugu Matsuoka");
                INSERT into voice_actor values("Ayane Sakura"); 
                INSERT into voice_actor values("Inori Minase");

                INSERT into voiced values ("Kana Hanazawa", "Angel Beats", "Kanade Tachibana");
                INSERT into voiced values ("Kana Hanazawa", "The Quintessential Quintuplets", "Ichika Nakano");
                INSERT into voiced values ("Kana Hanazawa", "Demon Slayer: Kimetsu no Yaiba", "Mitsuri Kanroji");
                INSERT into voiced values ("Kana Hanazawa", "The Garden of Words", "Yukari Yukino");
                INSERT into voiced values ("Kana Hanazawa", "Your Name", "Yukari Yukino");

                INSERT into voiced values ("Yui Ishikawa", "Violet Evergarden", "Violet Evergarden");
                INSERT into voiced values ("Yui Ishikawa", "Attack on Titan", "Mikasa Ackerman");
                INSERT into voiced values ("Yui Ishikawa", "A Silent Voice", "Miyoko Sahara");

                INSERT into voiced values ("Natsuki Hanae", "Demon Slayer: Kimetsu no Yaiba", "Tanjiro Kamado");
                INSERT into voiced values ("Natsuki Hanae", "Your Lie In April", "Kōsei Arima");

                INSERT into voiced values ("Sora Amamiya", "Plastic Memories", "Isla");
                INSERT into voiced values ("Sora Amamiya", "KonoSuba: God's Blessing on this Wonderful World!", "Aqua");
                INSERT into voiced values ("Sora Amamiya", "Rascal Does Not Dream of Bunny Girl Senpai", "Uzuki Hirokawa");
                INSERT into voiced values ("Sora Amamiya", "Rent-A-Girlfriend", "Chizuru Mizuhara");

                INSERT into voiced values ("Rie Takahashi", "Rent-A-Girlfriend", "Sumi Sakurasawa");
                INSERT into voiced values ("Rie Takahashi", "KonoSuba: God's Blessing on this Wonderful World!", "Megumin");
                INSERT into voiced values ("Rie Takahashi", "Re:Zero - Starting Life in Another World", "Emilia, Satella");

                INSERT into voiced values ("Ai Kayano", "KonoSuba: God's Blessing on this Wonderful World!", "Darkness");
                INSERT into voiced values ("Ai Kayano", "Anohana: The Flower We Saw That Day", "Menma");
                INSERT into voiced values ("Ai Kayano", "Golden Time", "Linda Hayashida");
                INSERT into voiced values ("Ai Kayano", "No Game No Life", "Shiro");
                INSERT into voiced values ("Ai Kayano", "Your Lie in April", "Nagi Aiza");
                INSERT into voiced values ("Ai Kayano", "Demon Slayer: Kimetsu no Yaiba", "Kanae Kocho");

                INSERT into voiced values ("Yoshitsugu Matsuoka", "Demon Slayer: Kimetsu no Yaiba", "Inosuke Hashibira");
                INSERT into voiced values ("Yoshitsugu Matsuoka", "The Quintessential Quintuplets", "Fūtarō Uesugi");
                INSERT into voiced values ("Yoshitsugu Matsuoka", "Puella Magi Madoka Magica", "Nakazawa");
                INSERT into voiced values ("Yoshitsugu Matsuoka", "No Game No Life", "Sora");
                INSERT into voiced values ("Yoshitsugu Matsuoka", "Re:Zero - Starting Life in Another World", "Petelgeuse Romanee-Conti");

                INSERT into voiced values ("Ayane Sakura", "Your Lie in April", "Tsubaki Sawabe");
                INSERT into voiced values ("Ayane Sakura", "The Quintessential Quintuplets", "Yotsuba Nakano");
                INSERT into voiced values ("Ayane Sakura", "Attack on Titan", "Gabi Braun");
                INSERT into voiced values ("Ayane Sakura", "Hotarubi no Mori e", "Hotaru Takegawa");
                INSERT into voiced values ("Ayane Sakura", "Weathering with You", "Ayane Hanazawa");

                INSERT into voiced values ("Inori Minase", "Your Lie in April", "Koharu Seto");
                INSERT into voiced values ("Inori Minase", "Re:Zero - Starting Life in Another World", "Rem");
                INSERT into voiced values ("Inori Minase", "Rascal Does Not Dream of Bunny Girl Senpai", "Shoko Makinohara");
                INSERT into voiced values ("Inori Minase", "The Quintessential Quintuplets", "Itsuki Nakano");
                INSERT into voiced values ("Inori Minase", "Made in Abyss", "Prushka");

                INSERT into user values ("David Chen", "David Chen", "password");
                INSERT into user values ("Eric Huang", "Eric Huang", "password");
                INSERT into user values ("Eden Chan", "Eden Chan", "password");

                INSERT into watched values ("No Game No Life", "David Chen");
                INSERT into watched values ("The Promised Neverland", "David Chen");
                INSERT into watched values ("Your Lie In April", "David Chen");
                INSERT into watched values ("Attack on Titan", "David Chen");
                INSERT into watched values ("The Quintessential Quintuplets", "David Chen");
                INSERT into watched values ("Rascal Does Not Dream of Bunny Girl Senpai", "David Chen");
                INSERT into watched values ("Angel Beats", "David Chen");
                INSERT into watched values ("Your Name", "David Chen");
                INSERT into watched values ("KonoSuba: God's Blessing on this Wonderful World!", "David Chen");
                INSERT into watched values ("Anohana: The Flower We Saw That Day", "David Chen");

                INSERT into watched values ("No Game No Life", "Eric Huang");
                INSERT into watched values ("The Quintessential Quintuplets", "Eric Huang");
                INSERT into watched values ("Angel Beats", "Eric Huang");
                INSERT into watched values ("Your Name", "Eric Huang");
                INSERT into watched values ("KonoSuba: God's Blessing on this Wonderful World!", "Eric Huang");
                INSERT into watched values ("Anohana: The Flower We Saw That Day", "Eric Huang");

                INSERT into watched values ("Demon Slayer: Kimetsu no Yaiba", "Eden Chan");
                INSERT into watched values ("Your Lie In April", "Eden Chan");
                INSERT into watched values ("Attack on Titan", "Eden Chan");
                INSERT into watched values ("Rascal Does Not Dream of Bunny Girl Senpai", "Eden Chan");
                INSERT into watched values ("Your Name", "Eden Chan");
                