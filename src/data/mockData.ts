export interface Review {
  id: string;
  user: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Place {
  id: string;
  title: string;
  location: string;
  address: string;
  description: string;
  image: string;
  category: 'naturaleza' | 'cultura' | 'gastronomía' | 'aventura';
  rating: number;
  author: string;
  size: 'small' | 'large';
  mapUrl: string;
  reviews: Review[];
}

export const mockPlaces: Place[] = [
  {
    id: '1',
    title: 'Torre de l\'Aigua',
    location: 'Sabadell, Barcelona',
    address: 'Plaça de la Torre de l\'Aigua, 1, 08201 Sabadell',
    description: 'Emblemática torre modernista que domina el skyline de Sabadell. Un símbolo de la industrialización catalana con una arquitectura única.',
    image: '/places/torre-aigua.png',
    category: 'cultura',
    rating: 4.8,
    author: 'Marc B.',
    size: 'large',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Torre+de+l\'Aigua+Sabadell',
    reviews: [
      { id: 'r1', user: 'Ana G.', rating: 5, comment: 'Imprescindible si visitas Sabadell. Las vistas desde abajo son geniales.', date: '2024-03-15' },
      { id: 'r2', user: 'Joan S.', rating: 4, comment: 'Muy icónico, aunque no siempre se puede entrar.', date: '2024-02-10' }
    ]
  },
  {
    id: '2',
    title: 'Bunkers del Carmel',
    location: 'Barcelona',
    address: 'Carrer de la Marià Labèrnia, s/n, 08032 Barcelona',
    description: 'El mejor mirador gratuito de Barcelona. Antiguas baterías antiaéreas que ofrecen una vista de 360 grados sobre toda la ciudad y el mar.',
    image: '/places/bunkers-carmel.png',
    category: 'aventura',
    rating: 4.9,
    author: 'Elena R.',
    size: 'small',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bunkers+del+Carmel+Barcelona',
    reviews: [
      { id: 'r3', user: 'David M.', rating: 5, comment: 'El atardecer desde aquí es mágico. Lleva algo para picar.', date: '2024-04-01' }
    ]
  },
  {
    id: '3',
    title: 'Parc de Catalunya',
    location: 'Sabadell, Barcelona',
    address: 'Av. de Francesc Macià, s/n, 08206 Sabadell',
    description: 'Pulmón verde de la ciudad con un gran lago artificial, observatorio astronómico y amplias zonas para pasear y desconectar.',
    image: '/places/parc-catalunya.png',
    category: 'naturaleza',
    rating: 4.6,
    author: 'Pau L.',
    size: 'small',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Parc+de+Catalunya+Sabadell',
    reviews: [
      { id: 'r4', user: 'Carla F.', rating: 4, comment: 'Ideal para familias. El lago es muy bonito.', date: '2024-03-20' }
    ]
  },
  {
    id: '4',
    title: 'Vall de Núria',
    location: 'Pirineos, Girona',
    address: '17534 Queralbs, Girona',
    description: 'Un santuario y estación de montaña accesible solo por tren cremallera. Rodeado de picos de casi 3000 metros, es un paraíso de paz.',
    image: '/places/vall-nuria.png',
    category: 'naturaleza',
    rating: 5.0,
    author: 'Santi C.',
    size: 'large',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Vall+de+Nuria',
    reviews: [
      { id: 'r5', user: 'Mireia V.', rating: 5, comment: 'Subir en el cremallera ya es una aventura. El entorno es espectacular.', date: '2024-01-05' },
      { id: 'r6', user: 'Roger T.', rating: 5, comment: 'Naturaleza pura. Muy recomendable en cualquier época del año.', date: '2024-02-28' }
    ]
  },
  {
    id: '5',
    title: 'Estany de Sant Maurici',
    location: 'Pirineos, Lleida',
    address: 'Parc Nacional d\'Aigüestortes i Estany de Sant Maurici, Lleida',
    description: 'El lago más icónico del único Parque Nacional de Cataluña, con las majestuosas montañas de Els Encantats de fondo.',
    image: '/places/sant-maurici.png',
    category: 'aventura',
    rating: 4.9,
    author: 'Laura J.',
    size: 'small',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Aiguestortes+Sant+Maurici',
    reviews: [
      { id: 'r7', user: 'Ferran P.', rating: 5, comment: 'Las rutas son exigentes pero valen mucho la pena.', date: '2024-04-10' }
    ]
  },
  {
    id: '6',
    title: 'Monasterio de Montserrat',
    location: 'Montserrat, Barcelona',
    address: '08199 Montserrat, Barcelona',
    description: 'Lugar sagrado situado en una montaña con formas únicas. Famoso por su monasterio benedictino y la estatua de la Virgen Negra.',
    image: '/places/montserrat.png',
    category: 'cultura',
    rating: 4.9,
    author: 'Marta F.',
    size: 'large',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Monasterio+de+Montserrat',
    reviews: [
      { id: 'r9', user: 'Oriol B.', rating: 5, comment: 'Un lugar espiritual con vistas increíbles.', date: '2024-05-12' }
    ]
  },
  {
    id: '7',
    title: 'Laberinto de Horta',
    location: 'Barcelona',
    address: 'Passeig dels Castanyers, 1, 08035 Barcelona',
    description: 'El jardín más antiguo de Barcelona. Un laberinto de cipreses perfecto para perderse y disfrutar del silencio neoclásico.',
    image: '/places/laberint-horta.png',
    category: 'cultura',
    rating: 4.7,
    author: 'Sergi T.',
    size: 'small',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Laberinto+de+Horta+Barcelona',
    reviews: [
      { id: 'r10', user: 'Laia S.', rating: 5, comment: 'Precioso y muy tranquilo. ¡Cuidado no te pierdas!', date: '2024-04-22' }
    ]
  },
  {
    id: '8',
    title: 'Templo del Tibidabo',
    location: 'Barcelona',
    address: 'Plaça del Tibidabo, 08035 Barcelona',
    description: 'Basílica situada en el pico más alto de la sierra de Collserola. Ofrece las mejores panorámicas de Barcelona.',
    image: '/places/tibidabo.png',
    category: 'cultura',
    rating: 4.8,
    author: 'Anna M.',
    size: 'small',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Templo+Tibidabo+Barcelona',
    reviews: [
      { id: 'r11', user: 'Hugo X.', rating: 4, comment: 'Lugar espectacular, la iglesia es impresionante.', date: '2024-03-05' }
    ]
  },
  {
    id: '9',
    title: 'Pedraforca',
    location: 'Pirineos, Barcelona',
    address: 'Saldes, Barcelona',
    description: 'Una de las montañas más emblemáticas de Cataluña debido a su curiosa forma de horca. Todo un reto para los amantes del senderismo.',
    image: '/places/pedraforca.png',
    category: 'aventura',
    rating: 5.0,
    author: 'Dani L.',
    size: 'large',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pedraforca+Barcelona',
    reviews: [
      { id: 'r12', user: 'Ricard V.', rating: 5, comment: 'La subida es dura pero la recompensa es única.', date: '2024-05-01' }
    ]
  },
  {
    id: '10',
    title: 'Monasterio de Sant Cugat',
    location: 'Sant Cugat del Vallès',
    address: 'Plaça d\'Octavià, 1, 08172 Sant Cugat del Vallès',
    description: 'Un antiguo monasterio benedictino con un claustro románico considerado una joya del arte medieval europeo.',
    image: 'https://images.unsplash.com/photo-1549429402-4d56b4618e5c?q=80&w=1000&auto=format&fit=crop',
    category: 'cultura',
    rating: 4.6,
    author: 'Clara G.',
    size: 'small',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Monasterio+Sant+Cugat',
    reviews: [
      { id: 'r13', user: 'Biel M.', rating: 4, comment: 'El claustro es una maravilla de la escultura románica.', date: '2024-02-14' }
    ]
  },
  {
    id: '11',
    title: 'Pueblo de Mura',
    location: 'Bages, Barcelona',
    address: '08278 Mura, Barcelona',
    description: 'Encantador pueblo medieval dentro del Parque Natural de Sant Llorenç del Munt i l\'Obac. Calles de piedra y entorno natural.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
    category: 'cultura',
    rating: 4.9,
    author: 'Jordi R.',
    size: 'small',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pueblo+Mura+Barcelona',
    reviews: [
      { id: 'r14', user: 'Nuria P.', rating: 5, comment: 'Parece que el tiempo se ha detenido en este pueblo.', date: '2024-04-18' }
    ]
  },
  {
    id: '12',
    title: 'Castell de Cardona',
    location: 'Cardona, Barcelona',
    address: '08261 Cardona, Barcelona',
    description: 'La fortaleza medieval más importante de Cataluña. Alberga una iglesia románica y la famosa Montaña de Sal.',
    image: 'https://images.unsplash.com/photo-1548588627-f9785842f53b?q=80&w=1000&auto=format&fit=crop',
    category: 'cultura',
    rating: 4.8,
    author: 'Sílvia C.',
    size: 'large',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Castillo+Cardona',
    reviews: [
      { id: 'r15', user: 'Victor L.', rating: 5, comment: 'El Parador y la visita a las minas de sal son increíbles.', date: '2024-05-20' }
    ]
  },
  {
    id: '13',
    title: 'Aeroclub Barcelona-Sabadell',
    location: 'Sabadell, Barcelona',
    address: 'Aeropuerto de Sabadell, 08205 Sabadell',
    description: 'Disfruta de un vuelo de bautismo sobre Cataluña. Una experiencia única para ver Montserrat y la costa desde el aire.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop',
    category: 'aventura',
    rating: 4.9,
    author: 'Xavi H.',
    size: 'small',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Aeroclub+Sabadell',
    reviews: [
      { id: 'r16', user: 'Pol F.', rating: 5, comment: 'Una pasada de experiencia. Los pilotos son muy profesionales.', date: '2024-03-25' }
    ]
  },
  {
    id: '14',
    title: 'Museu del Gas',
    location: 'Sabadell, Barcelona',
    address: 'Plaça del Gas, 8, 08201 Sabadell',
    description: 'Un viaje por la historia de la energía en un edificio industrial rehabilitado de gran belleza arquitectónica.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
    category: 'cultura',
    rating: 4.5,
    author: 'Carme T.',
    size: 'small',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Museu+del+Gas+Sabadell',
    reviews: [
      { id: 'r17', user: 'Pep B.', rating: 4, comment: 'Interesante museo, ideal para ir con niños.', date: '2024-01-30' }
    ]
  },
  {
    id: '15',
    title: 'Puente Viejo de Besalú',
    location: 'Besalú, Girona',
    address: '17850 Besalú, Girona',
    description: 'Uno de los puentes medievales más fotografiados del mundo. Entrada espectacular a una villa que conserva su esencia judía.',
    image: '/places/besalu.png',
    category: 'cultura',
    rating: 4.9,
    author: 'Albert Q.',
    size: 'small',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Besalu+Girona',
    reviews: [
      { id: 'r18', user: 'Judit M.', rating: 5, comment: 'El puente es majestuoso. Besalú es de mis pueblos favoritos.', date: '2024-04-10' }
    ]
  },
  {
    id: '16',
    title: 'Barrio Gótico',
    location: 'Barcelona',
    address: 'La Rambla, 08002 Barcelona',
    description: 'Explora los callejones medievales del corazón de Barcelona. Historia en cada piedra y rincones llenos de misterio.',
    image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?q=80&w=1000&auto=format&fit=crop',
    category: 'cultura',
    rating: 4.7,
    author: 'Toni G.',
    size: 'small',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Barrio+Gotico+Barcelona',
    reviews: [
      { id: 'r8', user: 'Isabel R.', rating: 4, comment: 'Precioso, aunque a veces hay demasiada gente.', date: '2024-03-30' }
    ]
  }
];
