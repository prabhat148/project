import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import ThemeColorPicker from './ThemeColorPicker';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Prabhat Kumar</h1>
          
          <div className="flex items-center gap-4">
            <ThemeColorPicker />
            <ThemeToggle />
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary">About</a>
              <a href="#qualification" className="text-gray-600 dark:text-gray-300 hover:text-primary">Qualification</a>
              <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-primary">Experience</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary">Projects</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary">Contact</a>
              
              <div className="flex items-center gap-4">
                <a href="https://github.com/prabhat148" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary" />
                </a>
                <a href="https://linkedin.com/in/prabhat-kumar-5444b5196" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </nav>
    </header>
  );
};

export default Header;