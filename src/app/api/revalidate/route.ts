import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

/**
 * This endpoint purges Prismic content from Next.js' cache. It is called when
 * content is published in Prismic.
 */
export async function POST(request: Request) {
  const secret = process.env.PRISMIC_WEBHOOK_SECRET;

  if (secret) {
    const providedSecret = request.headers.get("x-prismic-webhook-secret");

    if (!providedSecret || providedSecret !== secret) {
      return NextResponse.json({ revalidated: false }, { status: 401 });
    }
  }

  revalidateTag("prismic", "max");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
