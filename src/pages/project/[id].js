import { useRouter } from "next/router";
import { useState } from "react";
import { apiRequest } from "../../utils/api";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function submitProposal() {
    await apiRequest(
      `/projects/${id}/proposals?freelancer_id=2`,
      "POST",
      {
        amount: Number(amount),
        message
      }
    );
    setStatus("Proposal submitted successfully");
  }

  async function hireFreelancer() {
    const res = await apiRequest(`/hire/1`, "POST");
    setStatus(`Payment status: ${res.payment.status} (mock)`);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Project #{id}</h2>

      <h3>Submit Proposal</h3>
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <input
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={submitProposal}>Submit Proposal</button>

      <hr />

      <h3>Client Action</h3>
      <button onClick={hireFreelancer}>Hire Freelancer</button>

      {status && <p><b>{status}</b></p>}
    </div>
  );
}
