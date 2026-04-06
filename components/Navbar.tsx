
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Logo className="h-10" />
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">Leistungen</a>
           
            <a href="#contact" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">Kontakt</a>
          </div>
          <div>
            <a href="#contact" className="bg-[#1e3a8a] hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg">
              Angebot anfragen
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
