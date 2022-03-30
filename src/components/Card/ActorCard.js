import React, {useState, useEffect} from 'react';
import { Card, FormLabel } from 'react-bootstrap';

const ActorCard = () => {

    const [data, setData] = useState({
        name: "",
        anime: [],
    });

    return(
        <Card>
            <Card.Title>{data.name}</Card.Title>
            
            <Card.Text>Watched by</Card.Text>

            {data.anime.map(anime => {
                <FormLabel>

                </FormLabel>
            })}
        </Card>
    );
}

export default ActorCard;