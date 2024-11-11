import React from 'react';
import "./App.css";

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Achievements from './components/achievements/Achievements';
import Portfolio from './components/portfolio/Portfolio';
import Articles from './components/articles/Articles';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/Scrollup';

const App = () => {
  return (
    <>
      <Header />
      
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Achievements />
        <Portfolio />
        <Articles />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App