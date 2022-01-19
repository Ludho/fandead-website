import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Clips from './pages/clips';
import Incomming from './pages/incomming';
import Arts from './pages/arts';
import Miscellaneous from './pages/miscellaneous';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/incomming' element={<Incomming/>} />
        <Route path='/clips' element={<Clips vtubers="Rushia"/>} />
        <Route path='/arts' element={<Arts/>} />
        <Route path='/miscellaneous' element={<Miscellaneous/>} />
      </Routes>
    </Router>
  );
}

export default App;
