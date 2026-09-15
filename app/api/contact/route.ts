import { NextRequest, NextResponse } from "next/server";

// Phase 1: validates and logs the submission server-side. No email is sent
// yet. Swap the console.log below for a Supabase insert or email call later
// without changing the client-side ContactForm.
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Missing or invalid required fields." }, { status: 400 });
  }

  console.log("[contact-request]", { name, email, message });

  return NextResponse.json({ ok: true });
}
