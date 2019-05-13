import React from 'react';
import Header from './components/Header';
import './App.css';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import ClientsSection from './components/ClientsSection';
import ContactUsSection from './components/ContactUsSection';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div id="root" className="App">
        <Header />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ClientsSection />
        <ContactUsSection />
        <Subscribe />
        <Footer />
    </div>
  );
}

export default App;
