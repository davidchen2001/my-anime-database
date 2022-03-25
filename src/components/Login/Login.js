import React, {useState, useEffect} from "react";
import axios from "axios";

import {Button, Form, Container} from 'react-bootstrap';

const Login = () => {

    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = () => {
        axios.post(`/api/login`, data)
        .then((response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        }));
    }

    const handleChange = (e) => {
        setData({value: e.target.value});
    }

    return (
        <Container>
            <Form>
                <Form.Group controlId = "username">
                    <Form.Label>
                        Username
                    </Form.Label>
                    <Form.Control type = "username" onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId = "password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type = "password" onChange={handleChange}/>
                </Form.Group>
                <Button variant = "primary" type = "submit" onSubmit={handleSubmit}>
                    Login
                </Button>
            </Form>
        </Container>
    );

};

export default Login; 