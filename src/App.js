import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import InfoCard from './components/InfoCard';
import Guidelines from './components/Guildlines';
import PaymentSection from './components/PaymentSection';
import CarouselContent from './components/CarouselContent';
import CardSection from './components/CardSection';
import Doctors from './pages/Doctors';
import Slider from './components/Slider';
import Appointments from './pages/appointment';
import AppointmentForm from './pages/appointmentForm';
import Location from './pages/location';
import MyChart from './pages/myChart';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


import './App.css';

const ConditionalComponents = () => {
  const location = useLocation();
  const { pathname } = location;

  if (
    pathname === '/Doctors' ||
    pathname === '/Appointments' ||
    pathname === '/appointmentform' ||
    pathname === '/Location' ||
    pathname === '/myChart'
  ) {
    return null;
  }

  return (
    <>
      <Guidelines />
      <PaymentSection />
      <CarouselContent />
      <CardSection />
    </>
  );
};

const Home = () => {
  return (
    <>
      <Slider />
      <InfoCard />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Doctors" element={<Doctors />} />
          <Route path="/Appointments" element={<Appointments />} />
          <Route path="/appointmentform" element={<AppointmentForm />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/MyChart" element= {<MyChart/>} />
        </Routes>
        <ConditionalComponents />
      </div>
    </Router>
  );
};

export default App;
