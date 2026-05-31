import { formatGuests, formatPrice } from "@/lib/format";

type BookingCardProps = {
  pricePerNight: number;
  maxGuests: number;
};

export function BookingCard({ pricePerNight, maxGuests }: BookingCardProps) {
  return (
    <aside className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <p className="text-lg font-semibold text-zinc-900">
        {formatPrice(pricePerNight)} <span className="text-sm font-normal text-zinc-600">/ noche</span>
      </p>

      <div className="mt-4 space-y-3 rounded-xl border border-black/10 p-3 text-sm text-zinc-700">
        <div className="flex items-center justify-between gap-3">
          <span className="font-medium text-zinc-900">Fechas</span>
          <span>10 jun - 14 jun</span>
        </div>

        <div className="h-px bg-black/10" />

        <div className="flex items-center justify-between gap-3">
          <span className="font-medium text-zinc-900">Huespedes</span>
          <span>2 de {formatGuests(maxGuests)}</span>
        </div>
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
      >
        Reservar
      </button>

      <p className="mt-3 text-center text-xs text-zinc-500">No se cobrara nada por ahora.</p>
    </aside>
  );
}
