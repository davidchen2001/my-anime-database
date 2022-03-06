import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from './components/Login/Login';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/login" element = {<Login />} />
        <Route path = "/search" element = {<Search />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
