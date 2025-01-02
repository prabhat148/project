import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Qualification from './components/Qualification';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <Qualification />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;