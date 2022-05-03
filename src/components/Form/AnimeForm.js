import React, {useState} from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const AnimeForm = () => {

    const [data, setData] = useState({
        title: "",
        genre: "",
        studio: "", 
    });

    return (
        <div>
           <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Enter title" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Genre</Form.Label>
                    <Form.Control placeholder="Enter genre" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Studio</Form.Label>
                    <Form.Control placeholder="Enter studio" />
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

export default AnimeForm;