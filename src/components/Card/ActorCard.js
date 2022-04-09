import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ActorCard = (props) => {

    return(
        <Card>
            <Card.Title>
                <Button variant = "outline-dark">
                    {props.name}
                </Button>
            </Card.Title>
        </Card>
    );
}

export default ActorCard;