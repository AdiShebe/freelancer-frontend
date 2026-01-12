import { useState } from "react";

export default function PostRequirement() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [requirement, setRequirement] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submitForm() {
    const message = `
New Requirement – AutomateX

Name: ${name}
Contact: ${contact}

Estimated Budget: ${budget}
Preferred Timeline: ${timeline}

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
          <h2 style={{ color: "#111827", marginBottom: "12px" }}>
            Thank you! 🎉
          </h2>
          <p style={{ color: "#374151", marginBottom: "12px" }}>
            Your requirement has been received.
          </p>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>
            I personally review every request and will contact you shortly.
          </p>
        </div>
      </div>
    );
  }

  const labelStyle = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#111827",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "6px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    color: "#111827",
  };

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
          maxWidth: "640px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "14px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#111827", marginBottom: "8px" }}>
            Tell Us About Your Requirement
          </h2>
          <p style={{ fontSize: "14px", color: "#374151" }}>
            Share a few details and get a free consultation.
            No signup. No obligation.
          </p>
        </div>

        {/* NAME */}
        <div style={{ marginBottom: "18px" }}>
          <label style={labelStyle}>Your Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            style={inputStyle}
          />
        </div>

        {/* CONTACT */}
        <div style={{ marginBottom: "18px" }}>
          <label style={labelStyle}>Email or WhatsApp Number</label>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="email@example.com or +91 XXXXXXXXXX"
            style={inputStyle}
          />
        </div>

        {/* BUDGET */}
        <div style={{ marginBottom: "18px" }}>
          <label style={labelStyle}>Estimated Budget</label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            style={inputStyle}
          >
            <option value="">Select a range</option>
            <option value="₹5k – ₹10k">₹5k – ₹10k</option>
            <option value="₹10k – ₹25k">₹10k – ₹25k</option>
            <option value="₹25k – ₹50k">₹25k – ₹50k</option>
            <option value="₹50k+">₹50k+</option>
          </select>
        </div>

        {/* TIMELINE */}
        <div style={{ marginBottom: "18px" }}>
          <label style={labelStyle}>Preferred Timeline</label>
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            style={inputStyle}
          >
            <option value="">Select timeline</option>
            <option value="ASAP (1–2 weeks)">ASAP (1–2 weeks)</option>
            <option value="Flexible (2–4 weeks)">Flexible (2–4 weeks)</option>
            <option value="Just exploring">Just exploring</option>
          </select>
        </div>

        {/* REQUIREMENT */}
        <div style={{ marginBottom: "26px" }}>
          <label style={labelStyle}>Project Requirement</label>
          <textarea
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            rows={6}
            placeholder="Describe what you want to build or automate. Mention goals, tools, or constraints if any."
            style={{
              ...inputStyle,
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

        {/* TRUST / FOUNDER LINE */}
        <p
          style={{
            marginTop: "18px",
            fontSize: "12px",
            color: "#374151",
            textAlign: "center",
          }}
        >
          Every request is reviewed personally by the founder.  
          Your details are never shared.
        </p>
      </div>
    </div>
  );
}
