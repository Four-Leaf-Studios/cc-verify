import React, { useState } from "react";
import { isValidCard, getBrand } from "@four-leaf-studios/cc-verify";

const brands = [
  { name: "Visa", pattern: "4xxx", length: "13, 16, 19" },
  { name: "Mastercard", pattern: "51–55, 2221–2720", length: "16" },
  { name: "American Express", pattern: "34, 37", length: "15" },
  {
    name: "Discover",
    pattern: "6011, 65, 644–649, 622126–622925",
    length: "16–19",
  },
  { name: "Diners Club", pattern: "300–305, 36, 38–39", length: "14" },
  { name: "JCB", pattern: "3528–3589", length: "16" },
  { name: "UnionPay", pattern: "62", length: "16–19" },
  { name: "Maestro", pattern: "50, 56–69 (excl. 62)", length: "12–19" },
];

export default function App() {
  const [number, setNumber] = useState("");
  const brand = getBrand(number);
  const valid = isValidCard(number);

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: 1.5,
        padding: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Hero Section */}
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          💳 Credit Card Validation Library
        </h1>
        <p style={{ color: "#555", fontSize: "1.2rem" }}>
          A lightweight, fast, and reliable TypeScript/JavaScript library for
          credit card validation and brand detection.
        </p>
        <pre
          style={{
            background: "#f4f4f4",
            padding: "0.75rem 1rem",
            borderRadius: "6px",
            marginTop: "1rem",
            display: "inline-block",
          }}
        >
          npm install @four-leaf-studios/cc-verify
        </pre>
      </header>

      {/* Interactive Demo */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>Interactive Demo</h2>
        <input
          type="text"
          placeholder="Enter credit card number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            fontSize: "1rem",
            marginBottom: "1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <div>
          <strong>Brand:</strong> {brand}
        </div>
        <div>
          <strong>Valid:</strong> {valid ? "✅ Yes" : "❌ No"}
        </div>
      </section>

      {/* Supported Brands */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>Supported Card Brands</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {brands.map((b) => (
            <div
              key={b.name}
              style={{
                border: "1px solid #eee",
                borderRadius: "8px",
                padding: "1rem",
                background: "#fafafa",
              }}
            >
              <h3 style={{ margin: "0 0 0.5rem" }}>{b.name}</h3>
              <div style={{ fontSize: "0.9rem", color: "#444" }}>
                <div>
                  <strong>Pattern:</strong> {b.pattern}
                </div>
                <div>
                  <strong>Length:</strong> {b.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>Quick Start</h2>
        <pre
          style={{
            background: "#2d2d2d",
            color: "#f8f8f2",
            padding: "1rem",
            borderRadius: "6px",
            overflowX: "auto",
          }}
        >
          {`import { isValidCard, getBrand } from "@four-leaf-studios/cc-verify";

const isValid = isValidCard("4532 1234 5678 9012");
console.log(isValid); // true

const brand = getBrand("4532-1234-5678-9012");
console.log(brand); // 'visa'`}
        </pre>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: "2rem", textAlign: "center", color: "#666" }}>
        <p>
          MIT License ·{" "}
          <a
            href="https://github.com/Four-Leaf-Studios/cc-verify"
            target="_blank"
          >
            GitHub Repository
          </a>
        </p>
        <p>Made with ❤️ by the community</p>
      </footer>
    </div>
  );
}
