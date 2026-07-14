const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  // Fail loudly rather than pretending the signup worked — the old form's sin.
  if (!apiKey || !audienceId) {
    console.error("subscribe: RESEND_API_KEY or RESEND_AUDIENCE_ID not set");
    return Response.json(
      { error: "The kitchen's not open yet — try again soon." },
      { status: 503 }
    );
  }

  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return Response.json({ error: "Something went wrong." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return Response.json(
      { error: "That doesn't look like an email address." },
      { status: 400 }
    );
  }

  const res = await fetch(
    `https://api.resend.com/audiences/${audienceId}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.trim(), unsubscribed: false }),
    }
  );

  if (!res.ok) {
    const detail = await res.text();
    console.error(`subscribe: resend returned ${res.status}`, detail);
    return Response.json(
      { error: "Couldn't add you to the list. Try again in a bit?" },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
