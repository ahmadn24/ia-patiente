export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender: {
        name: name || "IA Patiente",
        email: "noreply@ia-patiente.fr",
      },
      to: [{ email: "ahmad.chamsedine@gmail.com", name: "Ahmad" }],
      subject: `Nouveau contact IA Patiente — ${name || "Anonyme"}`,
      htmlContent: `<p><strong>Nom :</strong> ${name || "—"}</p><p><strong>Email :</strong> ${email || "—"}</p><p><strong>Message :</strong></p><p>${message || "—"}</p>`,
    }),
  });

  if (!response.ok) {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }

  return Response.json({ success: true });
}
