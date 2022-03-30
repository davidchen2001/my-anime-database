import React, {useState, useEffect} from 'react';
import { Card, FormLabel } from 'react-bootstrap';

const AnimeCard = () => {

    const [data, setData] = useState({
        title: "",
        genre: "",
        studio: "",
        actors: [],
        watched: []
    });

    return(
        <Card>
            <Card.Title>{data.title}</Card.Title>

            <Card.Text>Genre: {data.genre}</Card.Text>
            <Card.Text>Studio: {data.studio}</Card.Text>
            
            <Card.Text>Watched by</Card.Text>

            {data.watched.map(user => {
                <FormLabel>

                </FormLabel>
            })}

            <Card.Text>Voice Actors</Card.Text>

            {data.actors.map(actor => {
                <FormLabel>

                </FormLabel>
            })}

        </Card>
    );
}

export default AnimeCard;