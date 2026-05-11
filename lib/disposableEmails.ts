// Curated list of common disposable / throwaway email domains.
// Not exhaustive — see the disposable-email-domains npm package for a fuller
// list. We block the obvious ones at the form layer; a real rate-limited
// backend gates insertion regardless.
export const DISPOSABLE_DOMAINS = new Set<string>([
  "10minutemail.com",
  "20minutemail.com",
  "30minutemail.com",
  "boximail.com",
  "dispostable.com",
  "fakeinbox.com",
  "fakemail.net",
  "getairmail.com",
  "getnada.com",
  "guerrillamail.com",
  "guerrillamail.info",
  "guerrillamail.net",
  "guerrillamail.org",
  "harakirimail.com",
  "mailcatch.com",
  "maildrop.cc",
  "mailinator.com",
  "mailnesia.com",
  "mailtemp.info",
  "mintemail.com",
  "moakt.com",
  "mohmal.com",
  "mytemp.email",
  "sharklasers.com",
  "spam4.me",
  "tempmail.com",
  "tempmail.email",
  "tempmail.net",
  "tempmailaddress.com",
  "tempr.email",
  "throwaway.email",
  "trash-mail.com",
  "trashmail.com",
  "trashmail.net",
  "yopmail.com",
  "yopmail.fr",
  "yopmail.net",
]);

export function isDisposableEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;
  return DISPOSABLE_DOMAINS.has(domain);
}
