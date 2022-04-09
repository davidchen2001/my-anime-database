import React, {useState, useEffect} from 'react';
import { Card, FormLabel } from 'react-bootstrap';

const AnimeCard = (props) => {

    return(
        <Card>
            <Card.Title>{props.title}</Card.Title>

            <Card.Text>Genre: {props.genre}</Card.Text>
            <Card.Text>Studio: {props.studio}</Card.Text>
        </Card>
    );
}

export default AnimeCard;