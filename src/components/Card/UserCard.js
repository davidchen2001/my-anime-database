import React, {useState} from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const UserCard = (props) => {

    const [anime, setAnime] = useState([]);
    const [showWatched, setShowWatched] = useState(true);

    const submitAnime = () => {
        if (showWatched)
        {
            axios.get(`/api/watched/user/${props.username}`)
            .then(response => {
                
                setShowWatched(false); 

                const responseData = response.data;
                
                setAnime(responseData);
            })
            .catch(err => {
                console.log(err);
            });

        }
        else
        {
            setAnime([]);
            setShowWatched(true);
        }
    }

    let watched = [];

    anime.forEach(eachAnime => {
        watched.push(<Card.Text>{eachAnime.anime_title}</Card.Text>)
    });

    return(
        <Card>
            
            <Card.Title>
                <Button variant = "outline-dark" onClick = {submitAnime}>
                    {props.username}
                </Button>
            </Card.Title>

            <Card.Text>Name: {props.name}</Card.Text>

            {watched.length > 0 ? <Card.Title>Watched: </Card.Title> : null}
            {watched}

        </Card>
    );
}

export default UserCard;