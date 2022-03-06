import React from 'react';
import { ButtonGroup, Button, Form } from 'react-bootstrap';

const Search = () => {

    return (
        <div>
            <ButtonGroup>
                <Button>
                    Search for Anime
                </Button>
                <Button>
                    Search for Voice Actor
                </Button>
                <Button>
                    Search for Username
                </Button>
            </ButtonGroup>

            <Form>
                <Form.Group>
                    <Form.Control>
                        
                    </Form.Control>
                </Form.Group>
            </Form>

        </div>
    );
};

export default Search;