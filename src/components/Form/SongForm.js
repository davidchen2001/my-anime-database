import React, {useState} from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const SongForm = () => {

    const [data, setData] = useState({
        name: "",
        anime: "",
        season: ""
    });

    return (
        <div>
           <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Song Name</Form.Label>
                    <Form.Control placeholder="Enter song" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Anime </Form.Label>
                    <Form.Control placeholder="Enter anime" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Season </Form.Label>
                    <Form.Control placeholder="Enter season" />
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

export default SongForm;