export interface Place {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  category: 'naturaleza' | 'cultura' | 'gastronomía' | 'aventura';
  rating: number;
  author: string;
  size: 'small' | 'large';
}

export const mockPlaces: Place[] = [
  {
    id: '1',
    title: 'Cala del Silencio',
    location: 'Costa Brava, España',
    description: 'Una cala turquesa escondida, accesible solo tras una caminata de 40 minutos por bosques de pinos. Aguas cristalinas y paz total.',
    image: '/places/cala-silencio.png',
    category: 'naturaleza',
    rating: 4.9,
    author: 'Enya P.',
    size: 'large'
  },
  {
    id: '2',
    title: 'La Librería de los Susurros',
    location: 'Oporto, Portugal',
    description: 'Una pequeña librería centenaria escondida en un callejón. Sin turistas, solo el olor a papel viejo y el silencio.',
    image: '/places/whispering-library.png',
    category: 'cultura',
    rating: 4.8,
    author: 'Erica N.',
    size: 'small'
  },
  {
    id: '3',
    title: 'Osteria di Montagna',
    location: 'Dolomitas, Italia',
    description: 'Refugio de montaña auténtico que sirve la mejor pasta casera que probarás jamás. Gestionado por una familia local durante tres generaciones.',
    image: '/places/osteria-montagna.png',
    category: 'gastronomía',
    rating: 4.7,
    author: 'Marco S.',
    size: 'small'
  },
  {
    id: '4',
    title: 'Ruta del Pico Esmeralda',
    location: 'Alpes Suizos',
    description: 'Una caminata exigente por la cresta que ofrece vistas panorámicas de tres lagos glaciales ocultos. Evita las multitudes de Jungfraujoch.',
    image: '/places/emerald-peak.png',
    category: 'aventura',
    rating: 5.0,
    author: 'Sven K.',
    size: 'large'
  },
  {
    id: '5',
    title: 'Atalaya Abandonada',
    location: 'Hvar, Croacia',
    description: 'Ruinas de la época veneciana con vistas al Adriático. El lugar perfecto para meditar al atardecer, lejos de las zonas de fiesta.',
    image: '/places/watchtower.png',
    category: 'cultura',
    rating: 4.6,
    author: 'Luka M.',
    size: 'small'
  }
];
