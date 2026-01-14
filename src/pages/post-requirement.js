import { useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init("P4hovcZLmnMUHh_p8");



export default function PostRequirement() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [requirement, setRequirement] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

function submitForm() {
  if (!name || !email || !requirement) {
    alert("Please fill all required fields.");
    return;
  }

  setLoading(true);

  const data = {
    name,
    email,
    whatsapp,
    requirement,
    budget,
    timeline,
  };

  // 1️⃣ Send lead email to YOU
  emailjs
    .send(
      "service_automatex",
      "template_kinc99j",
      data,
      "P4hovcZLmnMUHh_p8"
    )
    .then(
      (result) => {
        console.log("✅ Lead email sent successfully:", result.text);
      },
      (error) => {
        console.error("❌ Lead email FAILED:", error);
      }
    );

  // 2️⃣ Send auto-reply email to CLIENT
  emailjs
    .send(
      "service_automatex",
      "template_7p6d3le",
      data,
      "P4hovcZLmnMUHh_p8"
    )
    .then(
      (result) => {
        console.log("✅ Auto-reply sent successfully:", result.text);
      },
      (error) => {
        console.error("❌ Auto-reply FAILED:", error);
      }
    );

  setTimeout(() => {
    setSubmitted(true);
    setLoading(false);
  }, 1000);
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
          <p style={{ color: "#374151", marginBottom: "10px" }}>
            Your requirement has been submitted successfully.
          </p>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>
            I personally review every request and will get back to you shortly.
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
        <h2 style={{ marginBottom: "10px", color: "#111827" }}>
          Tell Us About Your Requirement
        </h2>
        <p style={{ fontSize: "14px", color: "#374151", marginBottom: "30px" }}>
          Get a free consultation. No signup. No obligation.
        </p>

        {/* NAME */}
        <div style={{ marginBottom: "18px" }}>
          <label style={labelStyle}>Your Name *</label>
          <input
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          />
        </div>

        {/* EMAIL */}
        <div style={{ marginBottom: "18px" }}>
          <label style={labelStyle}>Email Address *</label>
          <input
            style={inputStyle}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        {/* WHATSAPP */}
        <div style={{ marginBottom: "18px" }}>
          <label style={labelStyle}>WhatsApp Number (optional)</label>
          <input
            style={inputStyle}
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="+91 XXXXXXXXXX"
          />
        </div>

        {/* BUDGET */}
        <div style={{ marginBottom: "18px" }}>
          <label style={labelStyle}>Estimated Budget</label>
          <select
            style={inputStyle}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Select budget</option>
            <option>₹5k – ₹10k</option>
            <option>₹10k – ₹25k</option>
            <option>₹25k – ₹50k</option>
            <option>₹50k+</option>
          </select>
        </div>

        {/* TIMELINE */}
        <div style={{ marginBottom: "18px" }}>
          <label style={labelStyle}>Preferred Timeline</label>
          <select
            style={inputStyle}
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
          >
            <option value="">Select timeline</option>
            <option>ASAP (1–2 weeks)</option>
            <option>Flexible (2–4 weeks)</option>
            <option>Just exploring</option>
          </select>
        </div>

        {/* REQUIREMENT */}
        <div style={{ marginBottom: "26px" }}>
          <label style={labelStyle}>Project Requirement *</label>
          <textarea
            style={{ ...inputStyle, resize: "vertical" }}
            rows={6}
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            placeholder="Describe what you want to build or automate..."
          />
        </div>

        <button
          onClick={submitForm}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            background: "#111827",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            fontSize: "15px",
            cursor: "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Submitting..." : "Get Free Consultation"}
        </button>

        <p
          style={{
            marginTop: "18px",
            fontSize: "12px",
            color: "#374151",
            textAlign: "center",
          }}
        >
          Every request is reviewed personally by the founder.
        </p>
      </div>
    </div>
  );
}
