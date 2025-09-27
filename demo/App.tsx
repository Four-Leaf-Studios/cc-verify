import React, { useState } from "react";
import { isValidCard, getBrand } from "@four-leaf-studios/cc-verify";

export default function App() {
  const [number, setNumber] = useState("");
  const brand = getBrand(number);
  const valid = isValidCard(number);

  return (
    <div
      style={{ maxWidth: 400, margin: "50px auto", fontFamily: "sans-serif" }}
    >
      <h1>Credit Card Validator Demo</h1>
      <input
        type="text"
        placeholder="Enter card number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "1rem",
          marginBottom: "1rem",
        }}
      />
      <div>
        <strong>Brand:</strong> {brand}
      </div>
      <div>
        <strong>Valid:</strong> {valid ? "✅ Yes" : "❌ No"}
      </div>
    </div>
  );
}
