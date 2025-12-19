import Image from "next/image";

interface EventCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

export default function EventCard({
  image,
  date,
  title,
  description,
}: EventCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-neutral-900 text-neutral-100 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
      {/* Imagen */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay artístico */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        {/* Fecha */}
        <span className="absolute left-4 top-4 rounded-full bg-amber-500/90 px-4 py-1 text-sm font-semibold tracking-wide text-black shadow-md backdrop-blur">
          {date}
        </span>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-xl font-semibold leading-snug tracking-tight">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-neutral-300">
          {description}
        </p>

        {/* Detalle visual artístico */}
        <div className="mt-auto pt-4">
          <div className="h-px w-full bg-linear-to-r from-transparent via-amber-500/60 to-transparent" />
        </div>
      </div>
    </article>
  );
}
