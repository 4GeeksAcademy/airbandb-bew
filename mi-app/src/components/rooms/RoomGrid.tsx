import { Room } from "@/types/room";

import { RoomCard } from "./RoomCard";

type RoomGridProps = {
  title?: string;
  rooms: Room[];
};

export function RoomGrid({ title, rooms }: RoomGridProps) {
  return (
    <section className="space-y-4">
      {title ? (
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">{title}</h2>
      ) : null}

      {rooms.length === 0 ? (
        <p className="rounded-xl border border-dashed border-black/20 p-6 text-sm text-zinc-600">
          No hay alojamientos para mostrar.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      )}
    </section>
  );
}
