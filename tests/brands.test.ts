import { describe, it, expect } from "vitest";
import {
  isVisa,
  isMastercard,
  isAmex,
  isDiscover,
  isDiners,
  isJcb,
  isMaestro,
  isUnionPay,
  getBrand,
} from "../src/brands";
import { isValidCard } from "../src/ccVerify";

const samples = {
  visa: "4111 1111 1111 1111",
  mastercard: "5555 5555 5555 4444",
  mc2series: "2221000000000009",
  amex: "378282246310005",
  discover: "6011 1111 1111 1117",
  diners: "30569309025904",
  jcb: "3530111333300000",
  maestro: "6759649826438453",
  unionpay: "6240 0086 3140 1148",
};

describe("Brand predicates (pattern-only)", () => {
  it("visa", () => {
    expect(isVisa(samples.visa)).toBe(true);
    expect(getBrand(samples.visa)).toBe("visa");
  });

  it("mastercard incl. 2-series", () => {
    expect(isMastercard(samples.mastercard)).toBe(true);
    expect(isMastercard(samples.mc2series)).toBe(true);
    expect(getBrand(samples.mc2series)).toBe("mastercard");
  });

  it("amex", () => {
    expect(isAmex(samples.amex)).toBe(true);
    expect(getBrand(samples.amex)).toBe("amex");
  });

  it("discover", () => {
    expect(isDiscover(samples.discover)).toBe(true);
    expect(getBrand(samples.discover)).toBe("discover");
  });

  it("diners", () => {
    expect(isDiners(samples.diners)).toBe(true);
    expect(getBrand(samples.diners)).toBe("diners");
  });

  it("jcb", () => {
    expect(isJcb(samples.jcb)).toBe(true);
    expect(getBrand(samples.jcb)).toBe("jcb");
  });

  it("maestro", () => {
    expect(isMaestro(samples.maestro)).toBe(true);
    expect(getBrand(samples.maestro)).toBe("maestro");
  });

  it("unionpay", () => {
    expect(isUnionPay(samples.unionpay)).toBe(true);
    expect(getBrand(samples.unionpay)).toBe("unionpay");
  });

  it("unknown brand stays unknown", () => {
    expect(getBrand("9999 9999 9999 9999")).toBe("unknown");
  });

  it("brand predicates do NOT imply Luhn validity", () => {
    // Force a bad Luhn on a Visa-like prefix
    const badVisa = "4000000000000000";
    expect(isVisa(badVisa)).toBe(true);
    expect(isValidCard(badVisa)).toBe(false);
  });
});
