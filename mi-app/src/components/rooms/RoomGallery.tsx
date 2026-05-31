import Image from "next/image";

type RoomGalleryProps = {
  title: string;
  images: string[];
};

export function RoomGallery({ title, images }: RoomGalleryProps) {
  const uniqueImages = Array.from(new Set(images.filter(Boolean))).slice(0, 5);

  if (uniqueImages.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-black/20 bg-zinc-100 text-sm text-zinc-500 sm:h-96">
        Sin imagenes disponibles
      </div>
    );
  }

  const [mainImage, ...secondaryImages] = uniqueImages;
  const secondaryToShow = secondaryImages.slice(0, 4);

  function getDesktopSpanClass(totalSecondary: number, index: number) {
    if (totalSecondary === 1) return "lg:col-span-2 lg:row-span-2";
    if (totalSecondary === 2) return "lg:col-span-2";
    if (totalSecondary === 3 && index === 2) return "lg:col-span-2";
    return "lg:col-span-1";
  }

  return (
    <section
      aria-label="Galeria del alojamiento"
      className="grid grid-cols-1 gap-3 lg:grid-cols-4 lg:auto-rows-[170px]"
    >
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm lg:col-span-2 lg:row-span-2">
        <Image
          src={mainImage}
          alt={title}
          width={1400}
          height={900}
          className="h-72 w-full object-cover sm:h-96 lg:h-full"
          priority
        />
      </div>

      {secondaryToShow.length > 0 ? (
        secondaryToShow.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className={`overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm ${getDesktopSpanClass(secondaryToShow.length, index)}`}
          >
            <Image
              src={image}
              alt={`${title} vista ${index + 2}`}
              width={1000}
              height={700}
              className="h-36 w-full object-cover sm:h-44 lg:h-full"
            />
          </div>
        ))
      ) : null}
    </section>
  );
}
