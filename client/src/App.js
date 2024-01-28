// W
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TravelListings from './pages/TravelListings';
import BookingForm from './pages/BookingForm';

// Used purely to enable multiple pages and navigate between them

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel_listings" element={<TravelListings />} />
          <Route path="/booking_form" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
