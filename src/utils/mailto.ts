interface MailtoOptions {
  to: string;
  subject: string;
  body: string;
}

/** Builds a mailto: URL with a properly encoded subject and body. */
export function buildMailto({ to, subject, body }: MailtoOptions): string {
  const params = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${to}?${params}`;
}
