import { cn } from "@/lib/utils";

/** Generated illustration — always labelled so it's never mistaken for client work. */
export function ConceptImage({
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={cn("absolute inset-0 h-full w-full object-cover", imgClassName)}
      />
      <span className="eyebrow absolute right-4 top-4 z-10 rounded-full border border-border bg-obsidian/60 px-3 py-1 text-[0.6rem] backdrop-blur">
        Concept visual
      </span>
    </div>
  );
}
