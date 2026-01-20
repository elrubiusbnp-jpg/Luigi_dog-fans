
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center font-bold text-xs tracking-tighter">
            |—|
          </div>
          <span className="font-oswald text-xl tracking-widest uppercase">Twenty One Pilots</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
          <a href="#hero" className="hover:text-rose-500 transition-colors">Inicio</a>
          <a href="#music" className="hover:text-rose-500 transition-colors">Música</a>
          <a href="#tour" className="hover:text-rose-500 transition-colors">Gira</a>
          <a href="#ai" className="hover:text-rose-500 transition-colors">Intérprete IA</a>
        </div>
        <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all">
          Tickets
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
