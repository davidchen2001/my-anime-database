import React, {useState} from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';

const ActorCard = (props) => {

    const [data, setData] = useState([]);
    const [showCharacters, setShowCharacters] = useState(true);

    const submitActor = () => {
        if (showCharacters)
        {
            axios.get(`/api/characters/${props.name}`)
            .then(response => {
                
                setShowCharacters(false); 

                const responseData = response.data;
                
                setData(responseData);
            })
            .catch(err => {
                console.log(err);
            });

        }
        else
        {
            setData([]);
            setShowCharacters(true);
        }
    }

    let characters = [];

    data.forEach(character => {
        characters.push(<Card.Text>Anime: {character.anime_title}, Character: {character.character_name}</Card.Text>);
    })

    return(
        <Card>
            <Card.Title>
                <Button variant = "outline-dark" onClick={submitActor}>
                    {props.name}
                </Button>
            </Card.Title>

            {characters.length > 0 ? <Card.Title>Voiced: </Card.Title> : null}
            {characters}

            <Container>
                <Button variant="secondary">Edit Info</Button>
            </Container>
        </Card>
    );
}

export default ActorCard;