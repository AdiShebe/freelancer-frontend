import { useState } from "react";

export default function PostRequirement() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [requirement, setRequirement] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submitForm() {
    const message = `
New Requirement Received

Name: ${name}
Contact: ${contact}

Requirement:
${requirement}
    `;

    // Open email client
    window.location.href =
      `mailto:shebeaditya@gmail.com?subject=New Project Requirement&body=${encodeURIComponent(message)}`;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h2>Thanks! 🎉</h2>
        <p>Your requirement has been submitted.</p>
        <p>I’ll contact you shortly.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40, maxWidth: 600, margin: "0 auto" }}>
      <h2>Post Your Requirement</h2>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", marginBottom: 12 }}
      />

      <input
        placeholder="Email or WhatsApp Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        style={{ width: "100%", marginBottom: 12 }}
      />

      <textarea
        placeholder="Describe your web or automation requirement"
        value={requirement}
        onChange={(e) => setRequirement(e.target.value)}
        rows={5}
        style={{ width: "100%", marginBottom: 12 }}
      />

      <button
        onClick={submitForm}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Submit Requirement
      </button>
    </div>
  );
}
