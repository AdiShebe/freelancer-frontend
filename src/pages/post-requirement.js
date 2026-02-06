import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function PostRequirement() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [requirement, setRequirement] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

    emailjs.send(
      "service_vheoua2",
      "template_kinc99j",
      data,
      "P4hovcZLmnMUHh_p8"
    );

    emailjs.send(
      "service_vheoua2",
      "template_7p6d3le",
      data,
      "P4hovcZLmnMUHh_p8"
    );

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-10 rounded-xl shadow-md text-center max-w-md">
          <h2 className="text-2xl font-semibold mb-4">
            Thank you!
          </h2>
          <p className="text-gray-600">
            Your requirement has been received.  
            We’ll contact you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white w-full max-w-2xl p-10 rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold mb-2 text-center">
          Tell Us About Your Requirement
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Share a few details and we’ll get back to you within 24 hours.
        </p>

        <div className="space-y-5">
          <input
            type="text"
            placeholder="Your Name *"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email *"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="WhatsApp Number (optional)"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <textarea
            placeholder="Describe your requirement *"
            rows={5}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
          />

          <input
            type="text"
            placeholder="Budget (optional)"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <input
            type="text"
            placeholder="Timeline (optional)"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
          />

          <button
            onClick={submitForm}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            {loading ? "Submitting..." : "Get Free Consultation"}
          </button>
        </div>
      </div>
    </div>
  );
}
