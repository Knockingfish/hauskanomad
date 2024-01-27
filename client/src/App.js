import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TravelListings from './pages/TravelListings';
import BookingForm from './pages/BookingForm';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel-listings" element={<TravelListings />} />
          <Route path="/booking-form" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
