import React, {useState, useEffect} from 'react';
import { Card, FormLabel } from 'react-bootstrap';

const UserCard = () => {

    const [data, setData] = useState({
        username: "",
        name: "",
        watched: []
    });

    return(
        <Card>
            <Card.Title>{data.username}</Card.Title>

            <Card.Text>Name: {data.name}</Card.Text>
            
            <Card.Text>Watchlist</Card.Text>

            {data.watched.map(anime => {
                <FormLabel>

                </FormLabel>
            })}

        </Card>
    );
}

export default UserCard;