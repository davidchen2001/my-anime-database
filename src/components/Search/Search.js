import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ButtonGroup, Button, Form, Container, Row, Col } from 'react-bootstrap';
import AnimeCard from '../Card/AnimeCard';
import ActorCard from '../Card/ActorCard';
import SongCard from '../Card/SongCard';

const Search = () => {

    const [data, setData] = useState({
        search: "", 
    });

    const [anime, setAnime] = useState([]);
    const [actor, setActor] = useState([]);
    const [song, setSong] = useState([]);

    const submitAnime = () => {
        axios.get(`/api/anime/${data.search}`)
        .then(response => {
            const responseData = response.data;
            
            setAnime(responseData);

            setActor([]);
            setSong([]);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const submitActor = () => {
        axios.get(`/api/actor/${data.search}`)
        .then(response => {
            const responseData = response.data;
            setActor(responseData);

            setAnime([]);
            setSong([]);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const submitSong = () => {
        axios.get(`/api/songs/${data.search}`)
        .then(response => {
            const responseData = response.data;
            setSong(responseData);

            setAnime([]);
            setActor([]);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const handleChange = (e) => {
        setData({search: e.target.value});
    }

    let animeList = [];
    anime.forEach(eachAnime => {
        animeList.push(<AnimeCard title = {eachAnime.title} genre = {eachAnime.genre} studio = {eachAnime.studio} />)
    });

    let actorList = [];
    actor.forEach(eachActor => {
        actorList.push(<ActorCard name = {eachActor.name}/>)
    });

    let songList = [];
    song.forEach(eachSong => {
        songList.push(<SongCard anime_title = {eachSong.anime_title} song_title = {eachSong.title} season = {eachSong.season} />)
    });

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
                        <Button variant = "primary" type = "submit" onClick = {submitSong}>
                            Search for Song 
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

            <Col>
                {animeList}
                {actorList}
                {songList}
            </Col>

        </Container>
    );
};

export default Search;