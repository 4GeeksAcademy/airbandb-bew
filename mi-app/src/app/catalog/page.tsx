import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RoomGrid } from "@/components/rooms/RoomGrid";
import { rooms } from "@/data/rooms";

const filterChips = [
  "Precio",
  "Tipo de alojamiento",
  "Wifi",
  "Cocina",
  "Check-in autonomo",
  "Mascotas",
  "Cancelacion flexible",
];

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />

      <main className="mx-auto w-full max-w-6xl space-y-6 px-4 py-8 sm:px-6">
        <section className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Catalogo
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Alojamientos disponibles
          </h1>
          <p className="text-sm text-zinc-600">
            {rooms.length} estancias para tu proximo viaje
          </p>
        </section>

        <section aria-label="Filtros" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div className="flex w-max items-center gap-2 py-1">
            {filterChips.map((chip) => (
              <button
                key={chip}
                type="button"
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-black/20 hover:bg-zinc-100"
              >
                {chip}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <RoomGrid rooms={rooms} />

          <aside className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:h-fit">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-zinc-900">Mapa</h2>
              <span className="text-xs text-zinc-500">Vista previa</span>
            </div>

            <div className="flex h-72 items-center justify-center rounded-xl border border-dashed border-black/20 bg-zinc-100 text-center text-sm text-zinc-500 sm:h-80 lg:h-[440px]">
              Placeholder de mapa
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}
