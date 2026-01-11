import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>

      {/* HERO SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", marginBottom: "16px" }}>
          AutomateX — Fast, AI-Driven Web & Automation Solutions
        </h1>

        <p style={{ fontSize: "18px", maxWidth: "720px", margin: "0 auto 24px" }}>
          We help businesses automate workflows and build web solutions faster.  
          I personally shortlist experts and manage delivery end-to-end.
        </p>

        {/* CTA */}
        <Link href="/post-requirement" style={{ textDecoration: "none" }}>
          <span
            style={{
              display: "inline-block",
              padding: "14px 28px",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Post Your Requirement (Free)
          </span>
        </Link>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "50px 20px", background: "#f7f7f7" }}>
        <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
          What AutomateX Helps With
        </h2>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ul>
            <li>Web development (websites, dashboards, MVPs)</li>
            <li>Website fixes, performance & scalability improvements</li>
            <li>Python automation (scripts, scraping, workflow automation)</li>
            <li>API integrations & internal business tools</li>
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "50px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
          How It Works
        </h2>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ol>
            <li>You share your requirement</li>
            <li>I analyze it and shortlist the right expert</li>
            <li>You get a fixed price & clear timeline</li>
            <li>Work is delivered, reviewed, and finalized</li>
          </ol>
        </div>
      </section>

      {/* WHY AUTOMATEX */}
      <section style={{ padding: "50px 20px", background: "#f7f7f7" }}>
        <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
          Why Choose AutomateX
        </h2>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ul>
            <li>No endless hiring or freelancer searching</li>
            <li>Founder-led execution & accountability</li>
            <li>Automation-first mindset for faster delivery</li>
            <li>Transparent pricing & communication</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "16px" }}>
          Get Started with AutomateX
        </h2>

        <p style={{ marginBottom: "24px" }}>
          Share your requirement or reach out directly.
        </p>

        <p>
          📧 Email: <b>shebeaditya@gmail.com</b>
        </p>
        <p>
          📱 WhatsApp / Call: <b>+91 9588659913</b>
        </p>

        <p style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
          No signup required for the first discussion.
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          fontSize: "14px",
          color: "#777"
        }}
      >
        © {new Date().getFullYear()} <b>AutomateX</b> — Fast Automation. AI-Driven.
      </footer>

    </div>
  );
}
