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
<<<<<<< HEAD
  const SHOW_SOFT_SKILLS = false; // Toggle to show/hide SoftSkills on the site (keeps component in code)
=======
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
  return (
    <div className="min-h-screen bg-cyber-black text-cyber-white relative overflow-x-hidden">
      <GridBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Certificates />
<<<<<<< HEAD
        {SHOW_SOFT_SKILLS && <SoftSkills />}
=======
        <SoftSkills />
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
        <Contact />
      </main>
    </div>
  );
}

export default App;