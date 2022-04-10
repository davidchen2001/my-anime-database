import React, {useState} from 'react';
import axios from 'axios';
import { Card,Button } from 'react-bootstrap';

const AnimeCard = (props) => {

    const [user, setUser] = useState([]);
    const [actor, setActor] = useState([]);
    const [showWatched, setShowWatched] = useState(true);

    const submitUser = () => {
        if (showWatched)
        {
            const userRequest = axios.get(`/api/watched/anime/${props.title}`);
            const actorRequest = axios.get(`/api/voiced/anime/${props.title}`);

            axios.all([userRequest, actorRequest])
            .then(axios.spread((...responses) => {

                setShowWatched(false); 

                const userData = responses[0].data;
                const actorData = responses[1].data;

                console.log(actorData);

                setUser(userData);
                setActor(actorData);
            }))
            .catch(err => {
                console.log(err);
            });

        }
        else
        {
            setUser([]);
            setActor([]);
            setShowWatched(true);
        }
    }

    let watched = [];

    user.forEach(eachUser => {
        watched.push(<Card.Text>{eachUser.username}</Card.Text>)
    });

    let actors = [];

    actor.forEach(eachActor => {
        actors.push(<Card.Text>{eachActor.actor_name}</Card.Text>)
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

            {watched.length > 0 ? <Card.Title>Watched: </Card.Title> : null}
            {watched}

            {actors.length > 0 ? <Card.Title>Voice Actors: </Card.Title> : null}
            {actors}
        </Card>
    );
}

export default AnimeCard;