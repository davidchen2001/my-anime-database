import React from "react";

import {Button, Form, Container} from 'react-bootstrap';

const Login = () => {

    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>
                        Username
                    </Form.Label>
                    <Form.Control type = "username" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type = "password" />
                </Form.Group>
                <Button variant = "primary" type = "submit">
                    Login
                </Button>
            </Form>
        </Container>
    );

};

export default Login; 