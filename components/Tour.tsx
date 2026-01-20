
import React from 'react';
import { TOUR_DATES } from '../constants';

const Tour: React.FC = () => {
  return (
    <section id="tour" className="py-24 px-6 bg-black relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-rose-600 font-bold uppercase tracking-widest text-sm">En Vivo</span>
          <h2 className="text-5xl font-oswald font-bold uppercase mt-2 mb-4">The Clancy World Tour</h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {TOUR_DATES.map((tour) => (
            <div 
              key={tour.id} 
              className="flex flex-col md:flex-row items-center justify-between p-6 bg-zinc-900/50 border border-white/5 hover:border-rose-600/50 transition-all rounded-sm group"
            >
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 mb-4 md:mb-0">
                <div className="text-zinc-500 font-bold uppercase text-xs tracking-tighter w-24">
                  {tour.date}
                </div>
                <div className="text-center md:text-left">
                  <div className="text-xl font-oswald font-bold uppercase tracking-wide group-hover:text-rose-500 transition-colors">
                    {tour.city}
                  </div>
                  <div className="text-zinc-400 text-sm uppercase tracking-widest">
                    {tour.venue}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${
                  tour.status === 'Available' ? 'bg-green-500/10 text-green-500' : 'bg-rose-500/10 text-rose-500'
                }`}>
                  {tour.status === 'Available' ? 'Disponible' : 'Agotado'}
                </span>
                <button 
                  disabled={tour.status !== 'Available'}
                  className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                    tour.status === 'Available' 
                    ? 'bg-rose-600 hover:bg-rose-700 text-white cursor-pointer' 
                    : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                  }`}
                >
                  Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tour;
