import Image from "next/image";
import clsx from "clsx";

type EventCardVariant = "default" | "light" | "minimal";

interface EventCardClassNames {
  card?: string;
  imageWrapper?: string;
  overlay?: string;
  date?: string;
  content?: string;
  title?: string;
  description?: string;
  divider?: string;
}

interface EventCardProps {
  image: string;
  date: string;
  title: string;
  description: string;

  /** Opcionales */
  variant?: EventCardVariant;
  classNames?: EventCardClassNames;
}

export default function EventCard({
  image,
  date,
  title,
  description,
  variant = "default",
  classNames = {},
}: EventCardProps) {
  const variants = {
    default: {
      card: "bg-neutral-900 text-neutral-100",
      overlay: "from-black/70 via-black/30 to-transparent",
      date: "bg-brand-orange text-black",
      description: "text-neutral-300",
      divider: "via-amber-500/60",
    },
    light: {
      card: "bg-white text-neutral-900 border border-neutral-200",
      overlay: "from-white/70 via-white/30 to-transparent",
      date: "bg-black text-white",
      description: "text-neutral-600",
      divider: "via-neutral-300",
    },
    minimal: {
      card: "bg-transparent text-neutral-900",
      overlay: "from-black/40 via-black/10 to-transparent",
      date: "bg-neutral-900 text-white",
      description: "text-neutral-700",
      divider: "via-neutral-400",
    },
  };

  const v = variants[variant];

  return (
    <article
      className={clsx(
        "group relative flex h-full flex-col overflow-hidden rounded-xs shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl",
        v.card,
        classNames.card
      )}
    >
      {/* Imagen */}
      <div
        className={clsx(
          "relative h-52 w-full overflow-hidden",
          classNames.imageWrapper
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div
          className={clsx(
            "absolute inset-0 bg-linear-to-t",
            v.overlay,
            classNames.overlay
          )}
        />

        {/* Fecha */}
        <span
          className={clsx(
            "absolute left-4 top-4  px-4 py-1 text-sm font-semibold tracking-wide shadow-md backdrop-blur",
            v.date,
            classNames.date
          )}
        >
          {date}
        </span>
      </div>

      {/* Contenido */}
      <div
        className={clsx(
          "flex flex-1 flex-col gap-3 p-5",
          classNames.content
        )}
      >
        <h3
          className={clsx(
            "text-xl font-semibold leading-snug tracking-tight font-neue",
            classNames.title
          )}
        >
          {title}
        </h3>

        <p
          className={clsx(
            "text-sm leading-relaxed",
            v.description,
            classNames.description
          )}
        >
          {description}
        </p>

        {/* Divider */}
        <div className="mt-auto pt-4">
          <div
            className={clsx(
              "h-px w-full bg-linear-to-r from-transparent to-transparent",
              v.divider,
              classNames.divider
            )}
          />
        </div>
      </div>
    </article>
  );
}
