"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ reset }: { reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.refresh(), 2000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <div style={{ padding: "4rem", textAlign: "center" }}>
      <h1 style={{ color: "#E50051", fontSize: "2rem" }}>Retrying...</h1>
      <button onClick={() => reset()} style={{ marginTop: "1.25rem", background: "#E50051", color: "white", padding: "0.75rem 1.25rem", borderRadius: "0.5rem", border: "none", fontWeight: 600, cursor: "pointer" }}>Retry now</button>
    </div>
  );
}
