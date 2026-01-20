
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <h2 className="text-rose-600 font-oswald text-xl md:text-2xl uppercase tracking-[0.3em] mb-4">THE CLANCY TOUR</h2>
        <h1 className="text-6xl md:text-9xl font-oswald font-bold uppercase tracking-tighter mb-8 leading-none">
          TWENTY<br/>ONE<br/><span className="text-rose-600">PILOTS</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-300 font-light mb-10">
          Explora el fin de una era. Sumérgete en el lore de Dema y descubre la verdad detrás de Clancy.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#music" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all">
            Escuchar Ahora
          </a>
          <a href="#tour" className="px-8 py-4 border border-white/30 backdrop-blur-sm text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Ver Fechas
          </a>
        </div>
      </div>

      {/* Aesthetic decorative element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-rose-600 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
