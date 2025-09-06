import { describe, it, expect } from "vitest";
import { isValidCard } from "../src/verify";

describe("Luhn-only validator", () => {
  it("accepts valid Luhn numbers regardless of brand", () => {
    expect(isValidCard("4111 1111 1111 1111")).toBe(true); // Visa test
    expect(isValidCard("5555-5555-5555-4444")).toBe(true); // MC test
    expect(isValidCard("378282246310005")).toBe(true); // AmEx test
  });

  it("rejects invalid checksum", () => {
    expect(isValidCard("4111111111111112")).toBe(false);
  });

  it("handles formatting chars", () => {
    expect(isValidCard("4111-1111 1111-1111")).toBe(true);
  });

  it("rejects non-numeric and empty", () => {
    expect(isValidCard("abcdabcdabcd")).toBe(false);
    expect(isValidCard("")).toBe(false);
  });
});
