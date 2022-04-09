import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ButtonGroup, Button, Form, Container, Row, Col } from 'react-bootstrap';

const Search = () => {

    const [data, setData] = useState({
        search: "", 
    });

    const submitAnime = () => {

    }

    const submitActor = () => {

    }

    const submitUser = () => {

    }

    const handleChange = (e) => {
        setData({search: e.target.value});
    }

    return (
        <Container>
            <Row>
                <ButtonGroup>
                    <Col>
                        <Button variant = "primary" type = "submit" onClick={submitAnime}>
                            Search for Anime
                        </Button>
                    </Col>

                    <Col>
                        <Button variant = "primary" type = "submit" onClick={submitActor}>
                            Search for Voice Actor
                        </Button>
                    </Col>

                    <Col>
                        <Button variant = "primary" type = "submit" onClick = {submitUser}>
                            Search for User (Enter Username)
                        </Button>
                    </Col>

                </ButtonGroup>
            </Row>

            <Row>
                <Form>
                    <Form.Group controlId = "search">
                        <Form.Control type = "search" onChange = {handleChange}>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    );
};

export default Search;