import React, {useState} from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const ActorForm = () => {

    const [data, setData] = useState({
        name: "",
        
    });

    return (
        <div>
           <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Actor Name</Form.Label>
                    <Form.Control placeholder="Enter name" />
                </Form.Group>
                
                <Container>
                    <Row>
                        <Col xs = {6}>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>

                        <Col xs = {6}>
                            
                            <Button href="/" variant="primary" type="submit">
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Container>
                    
            </Form> 

        </div>
    );
}

export default ActorForm;