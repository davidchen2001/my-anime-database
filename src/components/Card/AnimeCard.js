import React, {useState} from 'react';
import axios from 'axios';
import { Card,Button } from 'react-bootstrap';

const AnimeCard = (props) => {

    const [user, setUser] = useState([]);
    const [showWatched, setShowWatched] = useState(true);

    const submitUser = () => {
        if (showWatched)
        {
            axios.get(`/api/watched/anime/${props.title}`)
            .then(response => {
                
                setShowWatched(false); 

                const responseData = response.data;
                
                setUser(responseData);
            })
            .catch(err => {
                console.log(err);
            });

        }
        else
        {
            setUser([]);
            setShowWatched(true);
        }
    }

    let watched = [];

    user.forEach(eachUser => {
        watched.push(<Card.Text>{eachUser.username}</Card.Text>)
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
        </Card>
    );
}

export default AnimeCard;