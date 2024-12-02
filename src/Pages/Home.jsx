import React from 'react';
import Hero from '../components/Hero';
import WelcomePage from '../components/WelcomePage';
import Interviews from '../components/Interviews';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <WelcomePage />
      <Interviews />
      <Footer />
    </div>
  );
};

export default Home;
