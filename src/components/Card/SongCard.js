import React, {useState} from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';

const SongCard = (props) => {

    return(
        <Card>
            
            <Card.Title>
                <Button variant = "outline-dark">
                    {props.song_title}
                </Button>
            </Card.Title>

            <Card.Text>Anime: {props.anime_title}</Card.Text>
            <Card.Text>Season: {props.season}</Card.Text>

            <Container>
                <Button variant="secondary">Edit Info</Button>
            </Container>
        </Card>
    );
}

export default SongCard;