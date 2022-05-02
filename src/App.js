import './App.css';

import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Search from './components/Search/Search';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/search" element = {<Search />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
