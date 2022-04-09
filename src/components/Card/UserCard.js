import React from 'react';
import { Card, Button } from 'react-bootstrap';

const UserCard = (props) => {

    return(
        <Card>
            
            <Card.Title>
                <Button variant = "outline-dark">
                    {props.username}
                </Button>
            </Card.Title>

            <Card.Text>Name: {props.name}</Card.Text>

        </Card>
    );
}

export default UserCard;