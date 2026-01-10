import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      
      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>
          Get Web & Automation Work Done — Fast & Reliable
        </h1>

        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto 24px" }}>
          We help businesses get websites built and Python automation done
          without long hiring cycles.  
          I personally shortlist the right freelancer and manage delivery.
        </p>

        {/* CTA BUTTON (CONNECTED TO FORM PAGE) */}
        <Link href="/post-requirement" style={{ textDecoration: "none" }}>
          <span
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Post Your Requirement (Free)
          </span>
        </Link>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "40px 20px", background: "#f7f7f7" }}>
        <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
          What We Help With
        </h2>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ul>
            <li>Web development (websites, dashboards, MVPs)</li>
            <li>Website fixes & performance improvements</li>
            <li>Python automation (scripts, scraping, workflows)</li>
            <li>API integrations & internal tools</li>
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
          How It Works
        </h2>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ol>
            <li>You share your requirement</li>
            <li>I shortlist the right developer for your task</li>
            <li>You get a fixed price & timeline</li>
            <li>Work is delivered and reviewed</li>
          </ol>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section style={{ padding: "40px 20px", background: "#f7f7f7" }}>
        <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
          Why Choose Us
        </h2>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ul>
            <li>No endless freelancer searching</li>
            <li>Direct communication & accountability</li>
            <li>Quality-focused delivery</li>
            <li>Transparent pricing</li>
          </ul>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "16px" }}>
          Share Your Requirement
        </h2>

        <p style={{ marginBottom: "24px" }}>
          Message me directly and I’ll help you get started.
        </p>

        <p>
          📧 Email: <b>your-email@example.com</b>
        </p>
        <p>
          📱 WhatsApp: <b>+91-XXXXXXXXXX</b>
        </p>

        <p style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
          No signup required for first discussion.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "20px", textAlign: "center", fontSize: "14px", color: "#777" }}>
        © {new Date().getFullYear()} Freelance Platform — Web & Automation Services
      </footer>

    </div>
  );
}
