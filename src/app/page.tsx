import { SliceZone } from '@prismicio/react'
import { createClient } from '@/prismicio'
import { components } from '@/slices'

export default async function Home() {
  const client = createClient()

  try {
    const home = await client.getByUID("page", "home")
    return <SliceZone slices={home.data.slices} components={components} />
  } catch {
    return (
      <div style={{ padding: "4rem", textAlign: "center" }}>
        <h1 style={{ color: "#E50051", fontSize: "3rem" }}>Request v2 → Prismic</h1>
        <p>✅ Dev server running.</p>
        <p>No Prismic document "page/home" found yet – create it in your repo.</p>
      </div>
    )
  }
}
