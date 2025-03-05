export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.name || !body.email || !body.message) {
      return new Response(JSON.stringify({ error: "All fields are required." }), { status: 400 });
    }

    // ✅ Process form submission here (e.g., send an email)
    // If `resend` is needed, use it. Otherwise, remove it.

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Something went wrong." }), { status: 500 });
  }
}
