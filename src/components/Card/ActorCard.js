import React, {useState, useEffect} from 'react';
import { Card, FormLabel } from 'react-bootstrap';

const ActorCard = (props) => {

    return(
        <Card>
            <Card.Title>{props.name}</Card.Title>
        </Card>
    );
}

export default ActorCard;