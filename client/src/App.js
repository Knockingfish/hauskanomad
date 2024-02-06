// W
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DestinationPage from './pages/DestinationPage';

// Used purely to enable multiple pages and navigate between them

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<DestinationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
