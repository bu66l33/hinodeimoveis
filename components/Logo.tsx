import Image from "next/image";
import clsx from "clsx";

export function Logo({
  light = false,
  full = false,
  variant = "default",
  className,
}: {
  light?: boolean;
  full?: boolean;
  variant?: "default" | "footer";
  className?: string;
}) {
  const isFullSize = full || variant === "footer";

  const src =
    variant === "footer"
      ? "/logo-footer.png"
      : full
        ? light
          ? "/logo-white.png"
          : "/logo-dark.png"
        : light
          ? "/logo-compact-white.png"
          : "/logo-compact-dark.png";

  return (
    <Image
      src={src}
      alt="Hinode Imóveis"
      width={isFullSize ? 908 : 845}
      height={isFullSize ? 594 : 528}
      priority
      className={clsx(
        className ?? (isFullSize ? "h-24 w-auto sm:h-28" : "h-12 w-auto sm:h-14")
      )}
    />
  );
}
