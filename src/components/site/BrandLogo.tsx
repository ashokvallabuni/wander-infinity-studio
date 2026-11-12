import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

type Variant = "full" | "compact" | "mark";

/** Renders the official logo file exactly as supplied — proportions preserved via width/height + h-auto. */
export function BrandLogo({
  variant = "full",
  className,
  priority = false,
}: {
  variant?: Variant;
  className?: string;
  priority?: boolean;
}) {
  const asset =
    variant === "compact" ? BRAND.logoCompact : variant === "mark" ? BRAND.mark : BRAND.logo;
  return (
    <img
      src={asset.src}
      width={asset.width}
      height={asset.height}
      alt={BRAND.name}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      className={cn("block h-auto max-w-full select-none object-contain", className)}
    />
  );
}
