
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Discography from './components/Discography';
import Tour from './components/Tour';
import LyricsChat from './components/LyricsChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <Discography />
        
        <section className="bg-rose-600 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <h3 className="font-oswald text-4xl font-bold uppercase tracking-widest text-black">Stay Alive. ||—||</h3>
            <div className="flex gap-4">
              <span className="text-zinc-900 font-bold uppercase tracking-widest text-sm">East is up.</span>
              <span className="text-zinc-900 font-bold uppercase tracking-widest text-sm">Sahlo Folina.</span>
            </div>
          </div>
        </section>

        <Tour />
        
        <LyricsChat />
      </main>

      <footer className="bg-black py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center font-bold text-xs tracking-tighter">
                |—|
              </div>
              <span className="font-oswald text-2xl tracking-widest uppercase">Twenty One Pilots</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs text-center md:text-left">
              Sitio web oficial de fans. Conectando a los Banditos de todo el mundo.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-6">Redes Sociales</h4>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-6">Soporte</h4>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tienda</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-[10px] text-zinc-600 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Twenty One Pilots Fan Experience. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default App;
