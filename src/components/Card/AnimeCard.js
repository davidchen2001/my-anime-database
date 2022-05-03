import React, {useState} from 'react';
import axios from 'axios';
import { Card,Button, Container, Row, Col } from 'react-bootstrap';

const AnimeCard = (props) => {

    const [song, setSong] = useState([]);
    const [actor, setActor] = useState([]);
    const [showWatched, setShowWatched] = useState(true);

    const submitUser = () => {
        if (showWatched)
        {
            const songRequest = axios.get(`/api/songs/anime/${props.title}`);
            const actorRequest = axios.get(`/api/voiced/anime/${props.title}`);

            axios.all([songRequest, actorRequest])
            .then(axios.spread((...responses) => {

                setShowWatched(false); 

                const songData = responses[0].data;
                const actorData = responses[1].data;

                setSong(songData);
                setActor(actorData);
            }))
            .catch(err => {
                console.log(err);
            });

        }
        else
        {
            setSong([]);
            setActor([]);
            setShowWatched(true);
        }
    }

    let songs = [];

    song.forEach(eachSong => {
        songs.push(<Card.Text>Opening: {eachSong.title}, Season: {eachSong.season}</Card.Text>)
    });

    let actors = [];

    actor.forEach(eachActor => {
        actors.push(<Card.Text>{eachActor.actor_name} voiced {eachActor.character_name}</Card.Text>)
    });

    return(
        <Card>
            <Card.Title> 
                <Button variant = "outline-dark" onClick = {submitUser}>
                    {props.title}
                </Button>
            </Card.Title>

            <Card.Text>Genre: {props.genre}</Card.Text>
            <Card.Text>Studio: {props.studio}</Card.Text>

            {songs.length > 0 ? <Card.Title>Openings: </Card.Title> : null}
            {songs}

            {actors.length > 0 ? <Card.Title>Voice Actors: </Card.Title> : null}
            {actors}

            <Container>
                <Button variant="secondary">Edit Info</Button>
            </Container>

            
        </Card>
    );
}

export default AnimeCard;