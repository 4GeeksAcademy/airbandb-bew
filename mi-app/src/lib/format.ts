export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatRating(rating: number): string {
  return rating.toFixed(2);
}

export function formatGuests(maxGuests: number): string {
  return `${maxGuests} ${maxGuests === 1 ? "huesped" : "huespedes"}`;
}
