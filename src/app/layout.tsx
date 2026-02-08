import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { PrismicToolbar } from "@/components/PrismicToolbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PrismicToolbar repositoryName={repositoryName} />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
