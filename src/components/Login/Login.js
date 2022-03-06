import React from "react";

import {Button, Form, } from 'react-bootstrap';

const Login = () => {

    return (
        <div>
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
                    Sign Up
                </Button>
            </Form>
        </div>
    );

};

export default Login; 