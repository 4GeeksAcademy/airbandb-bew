import { Room } from "@/types/room";

export const rooms: Room[] = [
  {
    id: "barcelona-loft-01",
    title: "Loft luminoso en el Born",
    location: "Barcelona, Espana",
    pricePerNight: 120,
    rating: 4.86,
    reviewCount: 132,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
    ],
    maxGuests: 3,
    description:
      "Loft moderno a pocos pasos de cafeterias, museos y vida nocturna.",
    amenities: ["Wifi", "Cocina", "Aire acondicionado"],
    featured: true,
  },
  {
    id: "valencia-beach-02",
    title: "Apartamento frente al mar",
    location: "Valencia, Espana",
    pricePerNight: 98,
    rating: 4.71,
    reviewCount: 94,
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
    ],
    maxGuests: 4,
    description:
      "Espacio comodo con balcon, ideal para escapadas de fin de semana.",
    amenities: ["Wifi", "Lavadora", "Cerca de playa"],
    featured: true,
  },
  {
    id: "madrid-center-03",
    title: "Estudio centrico con terraza",
    location: "Madrid, Espana",
    pricePerNight: 110,
    rating: 4.65,
    reviewCount: 76,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=80",
    ],
    maxGuests: 2,
    description:
      "Estudio funcional en zona bien conectada para turismo o trabajo.",
    amenities: ["Wifi", "Terraza", "Check-in autonomo"],
    featured: false,
  },
  {
    id: "malaga-patio-04",
    title: "Casa con patio andaluz",
    location: "Malaga, Espana",
    pricePerNight: 135,
    rating: 4.92,
    reviewCount: 158,
    image:
      "https://images.unsplash.com/photo-1616594039964-3f6cf0f90172?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1616594039964-3f6cf0f90172?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    ],
    maxGuests: 5,
    description:
      "Alojamiento amplio y tranquilo con encanto local y patio privado.",
    amenities: ["Wifi", "Patio", "Parking"],
    featured: true,
  },
];

export const featuredRooms = rooms.filter((room) => room.featured);
