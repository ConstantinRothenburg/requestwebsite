import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();

  const home = await client.getByUID("page", "home").catch(() => null);

  if (!home) {
    return (
      <div style={{ padding: "4rem", textAlign: "center" }}>
        <h1 style={{ color: "#E50051", fontSize: "3rem" }}>Request v2 → Prismic</h1>
        <p>✅ Dev server running.</p>
        <p>
          No Prismic document <code>page/home</code> found yet – create it in your
          repo.
        </p>
      </div>
    );
  }

  return <SliceZone slices={home.data.slices} components={components} />;
}

