import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { uid: string } }) {
  const client = createClient();

  const page = await client.getByUID("page", params.uid).catch(() => null);

  if (!page) {
    return null;
  }

  return <SliceZone slices={page.data.slices} components={components} />;
}

