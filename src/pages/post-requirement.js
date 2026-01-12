import { useState } from "react";

export default function PostRequirement() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [requirement, setRequirement] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submitForm() {
    const message = `
New Requirement – AutomateX

Name: ${name}
Contact: ${contact}

Requirement:
${requirement}
    `;

    window.location.href =
      `mailto:shebeaditya@gmail.com?subject=New Project Requirement (AutomateX)&body=${encodeURIComponent(message)}`;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f9fafb",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            padding: "40px",
            borderRadius: "12px",
            maxWidth: "520px",
            width: "100%",
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginBottom: "12px" }}>Thank you! 🎉</h2>
          <p style={{ color: "#374151", marginBottom: "16px" }}>
            Your requirement has been successfully submitted.
          </p>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>
            I’ll personally review it and contact you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "620px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "14px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ marginBottom: "8px" }}>
            Tell Us About Your Requirement
          </h2>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>
            Share a few details and we’ll help you with the best automation or web solution.
            No signup required.
          </p>
        </div>

        {/* NAME */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontSize: "14px", fontWeight: "600" }}>
            Your Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "6px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
            }}
          />
        </div>

        {/* CONTACT */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontSize: "14px", fontWeight: "600" }}>
            Email or WhatsApp Number
          </label>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="email@example.com or +91 XXXXXXXX"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "6px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
            }}
          />
        </div>

        {/* REQUIREMENT */}
        <div style={{ marginBottom: "28px" }}>
          <label style={{ fontSize: "14px", fontWeight: "600" }}>
            Project Requirement
          </label>
          <textarea
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            rows={6}
            placeholder="Describe what you want to build or automate. Mention goals, timeline, or tools if you have any preference."
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "6px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
              resize: "vertical",
            }}
          />
        </div>

        {/* CTA */}
        <button
          onClick={submitForm}
          style={{
            width: "100%",
            padding: "14px",
            background: "#111827",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Get Free Consultation
        </button>

        {/* TRUST NOTE */}
        <p
          style={{
            marginTop: "18px",
            fontSize: "12px",
            color: "#6b7280",
            textAlign: "center",
          }}
        >
          We respond personally. Your details are never shared.
        </p>
      </div>
    </div>
  );
}
