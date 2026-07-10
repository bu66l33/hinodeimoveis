import Image from "next/image";

export function Logo({
  light = false,
  full = false,
}: {
  light?: boolean;
  full?: boolean;
}) {
  const src = full
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
      width={full ? 908 : 845}
      height={full ? 594 : 528}
      priority
      className={
        full
          ? "h-24 w-auto sm:h-28"
          : "h-12 w-auto sm:h-14"
      }
    />
  );
}
