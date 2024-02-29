import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './pages/global/DarkModeContext';
import Home from './pages/home/Home';
import ProfilePage from './pages/profile/ProfilePage';
import AboutUs from './pages/about/AboutUs';

import Register from './pages/authentification/Register';
import Login from './pages/authentification/Login';
//import ForgotPassword from './pages/authentification/ForgotPassword'
import PasswordReset from './pages/authentification/PasswordReset'
import VerifiedPage from './pages/authentification/VerifiedPage'

//import DestinationPage from './pages/DestinationPage';

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password_reset" element={<PasswordReset />} />
          <Route path="/verified" element={<VerifiedPage />} />
        </Routes>
      </DarkModeProvider>
    </Router>
  );
}

export default App;
