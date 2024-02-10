// W
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DestinationPage from './pages/DestinationPage';
import ProfilePage from './pages/ProfilePage';
import Aboutus from './pages/Aboutus';

// Used purely to enable multiple pages and navigate between them

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Aboutus />} />
          <Route path="/Destination" element={<DestinationPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
