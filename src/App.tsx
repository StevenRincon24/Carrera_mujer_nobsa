import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventDescription from './pages/EventDescription';
import Nobsa from './pages/Nobsa';
import Nazareth from './pages/Nazareth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-description" element={<EventDescription />} />
        <Route path="/nobsa" element={<Nobsa />} />
        <Route path="/nazareth" element={<Nazareth />} />
      </Routes>
    </Router>
  );
}

export default App;