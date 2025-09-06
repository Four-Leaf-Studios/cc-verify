export function isValidCard(number: string): boolean {
  const clean = number.replace(/\D/g, "");
  if (clean.length < 12) return false;

  let sum = 0;
  let dbl = false;

  for (let i = clean.length - 1; i >= 0; i--) {
    let d = clean.charCodeAt(i) - 48; // fast parse
    if (d < 0 || d > 9) return false;
    if (dbl) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
    dbl = !dbl;
  }
  return sum % 10 === 0;
}

export * from "./brands";
