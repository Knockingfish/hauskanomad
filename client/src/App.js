import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './pages/global/DarkModeContext';
import Home from './pages/Home';
import DestinationPage from './pages/DestinationPage';
import ProfilePage from './pages/ProfilePage';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword'
import PasswordReset from './pages/PasswordReset'
import VerifiedPage from './pages/VerifiedPage'

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/password_reset" element={<PasswordReset />} />

          <Route path="/verified" element={<VerifiedPage />} />
        </Routes>
      </DarkModeProvider>
    </Router>
  );
}

export default App;
