import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen transition-colors">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    </DarkModeProvider>
  );
}

export default App;
