import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const UserWatchedCard = (props) => {

    let watched = [];
/*
    props.anime.forEach(anime => {
        watched.push(<Card.Text>{anime.title}</Card.Text>);
    })
*/

    return(
        <Card>
            <Card.Title>Username: {props.username}</Card.Title>
            <Card.Text>Watched: </Card.Text>

            {watched}
        </Card>
    );
}

export default UserWatchedCard;