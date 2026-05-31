import Link from "next/link";

import { BookingCard } from "@/components/rooms/BookingCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RoomGallery } from "@/components/rooms/RoomGallery";
import { rooms } from "@/data/rooms";
import { formatGuests, formatRating } from "@/lib/format";

type RoomDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { id } = await params;
  const room = rooms.find((item) => item.id === id);

  if (!room) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <Header />

        <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start gap-4 px-4 py-12 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">No encontrado</p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Este alojamiento no existe o ya no esta disponible.
          </h1>
          <Link
            href="/catalog"
            className="inline-flex rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Volver al catalogo
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  const galleryImages = room.images?.length ? room.images : [room.image];

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />

      <main className="mx-auto w-full max-w-6xl space-y-6 px-4 py-8 sm:px-6">
        <section className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Detalle del alojamiento</p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">{room.title}</h1>
          <p className="text-sm text-zinc-600">
            {room.location} · {formatRating(room.rating)} ({room.reviewCount} resenas) · {formatGuests(room.maxGuests)}
          </p>
        </section>

        <RoomGallery title={room.title} images={galleryImages} />

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <article className="space-y-6 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Informacion principal</h2>
              <p className="text-sm leading-6 text-zinc-700">{room.description}</p>
            </div>

            {room.amenities.length > 0 ? (
              <div className="space-y-3">
                <h3 className="text-base font-semibold tracking-tight text-zinc-900">Servicios incluidos</h3>
                <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-700 sm:grid-cols-2">
                  {room.amenities.map((amenity) => (
                    <li key={amenity} className="rounded-lg bg-zinc-100 px-3 py-2">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="space-y-3">
              <h3 className="text-base font-semibold tracking-tight text-zinc-900">Anfitrion</h3>
              <div className="rounded-xl border border-black/10 bg-zinc-50 p-4">
                <p className="text-sm font-medium text-zinc-900">Alojado por Lucia</p>
                <p className="mt-1 text-sm text-zinc-600">
                  Superhost con experiencia en estancias urbanas y respuesta rapida.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold tracking-tight text-zinc-900">Reglas y politicas</h3>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li>Check-in desde las 15:00</li>
                <li>No se permite fumar en el alojamiento</li>
                <li>Cancelacion gratuita dentro de las primeras 48 horas</li>
              </ul>
            </div>
          </article>

          <div className="lg:sticky lg:top-6 lg:h-fit">
            <BookingCard pricePerNight={room.pricePerNight} maxGuests={room.maxGuests} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
