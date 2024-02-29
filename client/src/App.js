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

import Australia from './pages/destination/australia';
import Brazil from './pages/destination/brazil';
import China from './pages/destination/china';
import Cuba from './pages/destination/cuba';
import Egypt from './pages/destination/egypt';
import France from './pages/destination/france';
import Germany from './pages/destination/germany';
import Hawaii from './pages/destination/hawaii';
import India from './pages/destination/india';
import Indonesia from './pages/destination/indonesia';
import Japan from './pages/destination/japan';
import Lapland from './pages/destination/lapland';
import Mexico from './pages/destination/mexico';
import Morocco from './pages/destination/morocco';
import NewYork from './pages/destination/newyork';
import NewZealand from './pages/destination/newzealand';
import Nigeria from './pages/destination/nigeria';
import Peru from './pages/destination/peru';
import Philippines from './pages/destination/philippines';
import Quebec from './pages/destination/quebec';
import SanFrancisco from './pages/destination/sanfrancisco';
import SouthAfrica from './pages/destination/southafrica';
import Thailand from './pages/destination/thailand';
import UK from './pages/destination/uk';

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

          <Route path="/australia" element={<Australia />} />
          <Route path="/brazil" element={<Brazil />} />
          <Route path="/china" element={<China />} />
          <Route path="/cuba" element={<Cuba />} />
          <Route path="/egypt" element={<Egypt />} />
          <Route path="/france" element={<France />} />
          <Route path="/germany" element={<Germany />} />
          <Route path="/hawaii" element={<Hawaii />} />
          <Route path="/india" element={<India />} />
          <Route path="/indonesia" element={<Indonesia />} />
          <Route path="/japan" element={<Japan />} />
          <Route path="/lapland" element={<Lapland />} />
          <Route path="/mexico" element={<Mexico />} />
          <Route path="/morocco" element={<Morocco />} />
          <Route path="/newyork" element={<NewYork />} />
          <Route path="/newzealand" element={<NewZealand />} />
          <Route path="/nigeria" element={<Nigeria />} />
          <Route path="/peru" element={<Peru />} />
          <Route path="/philippines" element={<Philippines />} />
          <Route path="/quebec" element={<Quebec />} />
          <Route path="/sanfrancisco" element={<SanFrancisco />} />
          <Route path="/southafrica" element={<SouthAfrica />} />
          <Route path="/thailand" element={<Thailand />} />
          <Route path="/uk" element={<UK />} />
        </Routes>
      </DarkModeProvider>
    </Router>
  );
}

export default App;
