
export interface Album {
  id: string;
  title: string;
  year: string;
  coverUrl: string;
  description: string;
}

export interface TourDate {
  id: string;
  date: string;
  city: string;
  venue: string;
  status: 'Available' | 'Sold Out' | 'Postponed';
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
