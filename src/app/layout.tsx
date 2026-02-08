import Script from "next/script";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          defer
          src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${repositoryName}`}
          strategy="afterInteractive"
        />
      </head>
      <body>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
