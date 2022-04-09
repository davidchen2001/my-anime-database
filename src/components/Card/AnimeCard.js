import React from 'react';
import { Card,Button } from 'react-bootstrap';

const AnimeCard = (props) => {

    return(
        <Card>
            <Card.Title> 
                <Button variant = "outline-dark">
                    {props.title}
                </Button>
            </Card.Title>

            <Card.Text>Genre: {props.genre}</Card.Text>
            <Card.Text>Studio: {props.studio}</Card.Text>
        </Card>
    );
}

export default AnimeCard;