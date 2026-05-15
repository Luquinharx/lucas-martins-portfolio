import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { SoftSkills } from './components/SoftSkills';
import { Contact } from './components/Contact';
import { GridBackground } from './components/GridBackground';

function App() {
  const SHOW_SOFT_SKILLS = false; // Toggle to show/hide SoftSkills on the site (keeps component in code)
  return (
    <div className="min-h-screen text-cyber-white relative overflow-x-hidden">
      <GridBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Certificates />
        {SHOW_SOFT_SKILLS && <SoftSkills />}
        <Contact />
      </main>
    </div>
  );
}

export default App;
