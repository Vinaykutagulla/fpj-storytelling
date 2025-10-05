// Placeholder email sending utility. In production wire to a provider (Resend, SendGrid, SES, etc.).
// Keeps interface minimal so implementation swap is low-risk.
export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  experience?: string;
  message: string;
  ip?: string;
  ua?: string;
}

export async function sendContactEmail(payload: ContactPayload) {
  // Simulate async send; replace with provider call.
  // eslint-disable-next-line no-console
  console.log('[email:contact] queued', {
    to: 'firstpharmajob@gmail.com', // configured recipient
    subject: `New contact form message from ${payload.name}`,
    preview: payload.message.slice(0, 120),
    service: payload.service || null,
    meta: { phone: payload.phone || null, email: payload.email }
  });
  return { ok: true } as const;
}
