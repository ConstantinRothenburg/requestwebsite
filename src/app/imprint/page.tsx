import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const doc = await client.getSingle("imprint").catch(() => null);
  if (!doc) return {};

  return {
    title: doc.data.meta_title || "Imprint",
    description: doc.data.meta_description || undefined,
  };
}

export default async function ImprintPage() {
  const client = createClient();
  const doc = await client.getSingle("imprint").catch(() => null);
  if (!doc) notFound();

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "5rem 1.5rem" }}>
      <PrismicRichText field={doc.data.title} />
      <PrismicRichText field={doc.data.content} />
    </main>
  );
}
