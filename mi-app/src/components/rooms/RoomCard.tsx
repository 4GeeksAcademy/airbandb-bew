import Image from "next/image";
import Link from "next/link";

import { formatGuests, formatPrice, formatRating } from "@/lib/format";
import { Room } from "@/types/room";

type RoomCardProps = {
  room: Room;
};

export function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
      <Link href={`/rooms/${room.id}`} className="block">
        <Image
          src={room.image}
          alt={room.title}
          width={1200}
          height={800}
          className="h-52 w-full object-cover"
        />

        <div className="space-y-2 p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold text-zinc-900">{room.title}</h3>
            <span className="shrink-0 text-sm font-medium text-zinc-700">
              {formatRating(room.rating)}
            </span>
          </div>

          <p className="text-sm text-zinc-600">{room.location}</p>
          <p className="text-sm text-zinc-600">
            {room.reviewCount} resenas · {formatGuests(room.maxGuests)}
          </p>

          <p className="text-sm font-semibold text-zinc-900">
            {formatPrice(room.pricePerNight)} <span className="font-normal">/ noche</span>
          </p>
        </div>
      </Link>
    </article>
  );
}
