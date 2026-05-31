export type Room = {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  maxGuests: number;
  description: string;
  amenities: string[];
  featured?: boolean;
};
