import React from 'react';
import Header from './components/header';
import Slider from './components/Slider';
import InfoCard from './components/InfoCard';
import Guidelines from './components/Guildlines';
import PaymentSection from './components/PaymentSection';
import CarouselContent from './components/CarouselContent';
import CardSection from './components/CardSection';

import './App.css';


const App = () => {
 

  return (
    <div className="App">
      <Header/>
      <Slider/>
      <InfoCard/>
      <Guidelines/>
      <PaymentSection/>
      <CarouselContent/>
      <CardSection/>


    </div>
  );
};

export default App;
