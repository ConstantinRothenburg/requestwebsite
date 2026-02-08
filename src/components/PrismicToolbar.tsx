"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

export function PrismicToolbar({
  repositoryName,
}: {
  repositoryName: string;
}) {
  const pathname = usePathname() || "";

  if (pathname.startsWith("/slice-simulator") || pathname.startsWith("/slices")) {
    return null;
  }

  return (
    <Script
      async
      defer
      src={
        "https://static.cdn.prismic.io/prismic.js?new=true&repo=" + repositoryName
      }
      strategy="afterInteractive"
    />
  );
}
