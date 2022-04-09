import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Search />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
