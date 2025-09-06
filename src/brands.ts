/**
 * Brand-only checks: digit cleaning + pattern/length ranges.
 * These DO NOT run Luhn. Combine with isValidCard if needed.
 */

function digits(input: string): string {
  return input.replace(/\D/g, "");
}

/** Visa: starts 4, length 13/16/19 */
export function isVisa(input: string): boolean {
  const n = digits(input);
  return /^4(?:\d{12}|\d{15}|\d{18})$/.test(n);
}

/** MasterCard: 51–55 (16) or 2221–2720 (16) */
export function isMastercard(input: string): boolean {
  const n = digits(input);
  // NOTE: leading '2' is outside the inner groups -> counts adjusted to keep total length 16.
  return /^(?:5[1-5]\d{14}|2(?:2[2-9]\d{13}|[3-6]\d{14}|7[01]\d{13}|720\d{12}))$/.test(
    n
  );
}

/** American Express: 34 or 37 (15) */
export function isAmex(input: string): boolean {
  const n = digits(input);
  return /^(?:34|37)\d{13}$/.test(n);
}

/** Discover: 6011, 65, 644–649, 622126–622925 (16–19 supported paths) */
export function isDiscover(input: string): boolean {
  const n = digits(input);
  return /^(?:6011\d{12}|65\d{14}|64[4-9]\d{13}|622(?:12[6-9]|1[3-9]\d|[2-8]\d{2}|9[01]\d|92[0-5])\d{10})$/.test(
    n
  );
}

/** Diners Club (Carte Blanche/International): 300–305 (14), 36 (14), 38–39 (14) */
export function isDiners(input: string): boolean {
  const n = digits(input);
  return /^(?:3(?:0[0-5]\d{11}|[68]\d{12}))$/.test(n);
}

/** JCB: 3528–3589 (16) */
export function isJcb(input: string): boolean {
  const n = digits(input);
  return /^35\d{14}$/.test(n);
}

/** UnionPay: 62… (lengths 16–19 typical) */
export function isUnionPay(input: string): boolean {
  const n = digits(input);
  return /^62\d{14,17}$/.test(n);
}

/** Maestro:
 * Common IINs include 50, 56–69 with variable lengths (12–19).
 * Exclude 62 explicitly to avoid clashing with UnionPay.
 */
export function isMaestro(input: string): boolean {
  const n = digits(input);
  return /^(?:50\d{10,17}|5[6-9]\d{10,17}|6(?!2)\d{10,17})$/.test(n);
}

/** Convenience helper if you want one. */
export type CardBrand =
  | "visa"
  | "mastercard"
  | "amex"
  | "discover"
  | "diners"
  | "jcb"
  | "maestro"
  | "unionpay"
  | "unknown";

export function getBrand(input: string): CardBrand {
  if (isAmex(input)) return "amex";
  if (isVisa(input)) return "visa";
  if (isMastercard(input)) return "mastercard";
  if (isDiscover(input)) return "discover";
  if (isDiners(input)) return "diners";
  if (isJcb(input)) return "jcb";
  // Check UnionPay BEFORE Maestro to avoid overlap on 6*
  if (isUnionPay(input)) return "unionpay";
  if (isMaestro(input)) return "maestro";
  return "unknown";
}
