import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ButtonGroup, Button, Form, Container, Row, Col } from 'react-bootstrap';

const Search = () => {

    return (
        <Container>
            <Row>
                <ButtonGroup>
                    <Col>
                        <Button>
                            Search for Anime
                        </Button>
                    </Col>

                    <Col>
                        <Button>
                            Search for Voice Actor
                        </Button>
                    </Col>

                    <Col>
                        <Button>
                            Search for User (Enter Username)
                        </Button>
                    </Col>

                </ButtonGroup>
            </Row>

            <Row>
                <Form>
                    <Form.Group>
                        <Form.Control>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    );
};

export default Search;