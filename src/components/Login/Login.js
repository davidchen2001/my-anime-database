import React, {useState} from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = () => {

    const [data, setData] = useState({
        username: "",
        password: "", 
    });

    return (
        <div>
           <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Container>
                    <Row>
                        <Col xs = {6}>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>

                        <Col xs = {6}>
                            <Button href="/register" variant="primary" type="submit">
                                Register 
                            </Button>
                        </Col>
                    </Row>
                </Container>
                    
            </Form> 

        </div>
    );
}

export default Login;