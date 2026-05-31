import Link from "next/link";

import { featuredRooms } from "@/data/rooms";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RoomGrid } from "@/components/rooms/RoomGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 space-y-10 px-4 py-8 sm:px-6">
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Encuentra tu proxima estancia
          </p>
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Alojamientos unicos para escapadas de fin de semana
          </h1>
          <p className="max-w-2xl text-zinc-600">
            Explora opciones destacadas y entra al catalogo para aplicar filtros.
          </p>
          <form className="grid grid-cols-1 gap-3 rounded-2xl border border-black/10 bg-zinc-50 p-3 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_auto] lg:items-center">
            <label className="space-y-1">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">Destino</span>
              <input
                type="text"
                defaultValue="Barcelona"
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-300"
                placeholder="¿A donde vas?"
              />
            </label>

            <label className="space-y-1">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">Fechas</span>
              <input
                type="text"
                defaultValue="10 jun - 14 jun"
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-300"
                placeholder="Selecciona fechas"
              />
            </label>

            <label className="space-y-1">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">Huespedes</span>
              <input
                type="text"
                defaultValue="2 huespedes"
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-300"
                placeholder="Cuantas personas"
              />
            </label>

            <Link
              href="/catalog"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              Buscar
            </Link>
          </form>
          <Link
            href="/catalog"
            className="inline-flex rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Ir al catalogo
          </Link>
        </section>

        <RoomGrid title="Alojamientos destacados" rooms={featuredRooms} />
      </main>

      <Footer />
    </div>
  );
}
