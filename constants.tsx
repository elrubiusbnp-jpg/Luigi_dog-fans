
import { Album, TourDate } from './types';

export const ALBUMS: Album[] = [
  {
    id: 'clancy',
    title: 'Clancy',
    year: '2024',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800',
    description: 'El esperado regreso al mundo de Trench, cerrando la épica narrativa de los obispos y Dema.'
  },
  {
    id: 'sai',
    title: 'Scaled and Icy',
    year: '2021',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    description: 'Un giro colorido y optimista con matices oscuros ocultos bajo la superficie de la propaganda de Dema.'
  },
  {
    id: 'trench',
    title: 'Trench',
    year: '2018',
    coverUrl: 'https://images.unsplash.com/photo-1514525253361-b59a4e2a852f?auto=format&fit=crop&q=80&w=800',
    description: 'Una obra maestra conceptual que introdujo el complejo lore de Banditos y la ciudad amurallada.'
  },
  {
    id: 'blurryface',
    title: 'Blurryface',
    year: '2015',
    coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800',
    description: 'El álbum que los llevó al estrellato global, explorando las inseguridades representadas por Blurryface.'
  }
];

export const TOUR_DATES: TourDate[] = [
  { id: '1', date: 'Mayo 15, 2024', city: 'Madrid, ES', venue: 'WiZink Center', status: 'Sold Out' },
  { id: '2', date: 'Mayo 17, 2024', city: 'Barcelona, ES', venue: 'Palau Sant Jordi', status: 'Available' },
  { id: '3', date: 'Junio 02, 2024', city: 'Mexico City, MX', venue: 'Foro Sol', status: 'Available' },
  { id: '4', date: 'Junio 10, 2024', city: 'Buenos Aires, AR', venue: 'Movistar Arena', status: 'Sold Out' },
  { id: '5', date: 'Junio 15, 2024', city: 'Santiago, CL', venue: 'Movistar Arena', status: 'Available' }
];
