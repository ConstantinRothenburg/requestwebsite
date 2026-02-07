import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { uid: string } }) {
  const client = createClient();
  try {
    const page = await client.getByUID("page", params.uid);
    return <SliceZone slices={page.data.slices} components={components} />;
  } catch {
    return null;
  }
}
