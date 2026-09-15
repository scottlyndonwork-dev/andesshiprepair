import { NextRequest, NextResponse } from "next/server";

// Phase 1: validates and logs the submission server-side. No email/database
// write happens yet. This is shaped so a Supabase insert (quote_requests
// table) can replace the console.log without changing QuoteWizard.
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { contact, vessel, service } = body as Record<string, unknown>;

  if (
    !contact ||
    typeof contact !== "object" ||
    !vessel ||
    typeof vessel !== "object" ||
    !service ||
    typeof service !== "object"
  ) {
    return NextResponse.json({ error: "Missing required sections." }, { status: 400 });
  }

  const c = contact as Record<string, unknown>;
  if (
    typeof c.name !== "string" ||
    !c.name.trim() ||
    typeof c.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)
  ) {
    return NextResponse.json({ error: "Invalid contact information." }, { status: 400 });
  }

  console.log("[quote-request]", body);

  return NextResponse.json({ ok: true });
}
