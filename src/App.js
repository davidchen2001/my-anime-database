import './App.css';

import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Search from './components/Search/Search';
import AnimeForm from './components/Form/AnimeForm';
import ActorForm from './components/Form/ActorForm';
import SongForm from './components/Form/SongForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Search />} />
        <Route path = "/anime-form" element = {<AnimeForm/>} />
        <Route path = "/actor-form" element = {<ActorForm/>} />
        <Route path = "/song-form" element = {<SongForm/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
