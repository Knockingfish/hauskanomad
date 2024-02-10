import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DestinationPage from './pages/DestinationPage';
import ProfilePage from './pages/ProfilePage';
import AboutUs from './pages/AboutUs';
import { Registration, Login, ResetPassword } from './pages/Auth';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Destination" element={<DestinationPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
