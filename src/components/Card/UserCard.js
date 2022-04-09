import React, {useState, useEffect} from 'react';
import { Card, FormLabel } from 'react-bootstrap';

const UserCard = (props) => {

    return(
        <Card>
            <Card.Title>{props.username}</Card.Title>

            <Card.Text>Name: {props.name}</Card.Text>

        </Card>
    );
}

export default UserCard;