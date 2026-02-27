import type { GalleryImage } from "@/data/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export default function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const colClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid ${colClass} gap-4`}>
      {images.map((img) => (
        <div
          key={img.id}
          className="relative aspect-[4/3] rounded-xl overflow-hidden group card-shadow border border-silver/30"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {img.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-deep/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-medium">{img.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
