
import React from 'react';
import { ALBUMS } from '../constants';

const Discography: React.FC = () => {
  return (
    <section id="music" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-rose-600 font-bold uppercase tracking-widest text-sm">Discografía</span>
            <h2 className="text-5xl font-oswald font-bold uppercase mt-2">Nuestros Álbumes</h2>
          </div>
          <p className="max-w-md text-gray-400 text-right">
            Desde la experimentación de self-titled hasta la narrativa épica de Clancy. Cada nota cuenta una historia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ALBUMS.map((album) => (
            <div key={album.id} className="group relative overflow-hidden bg-zinc-900 rounded-lg transition-all hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={album.coverUrl} 
                  alt={album.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-oswald text-2xl font-bold uppercase tracking-wider">{album.title}</h3>
                  <span className="text-rose-600 font-bold text-sm">{album.year}</span>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4 group-hover:text-gray-300 transition-colors">
                  {album.description}
                </p>
                <button className="text-xs font-bold uppercase tracking-widest text-white border-b border-rose-600 pb-1 hover:text-rose-600 transition-colors">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discography;
