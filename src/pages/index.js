import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", color: "#111" }}>

      {/* ================= HEADER ================= */}
      <header
        style={{
          padding: "20px 40px",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#ffffff",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "700" }}>
          AutomateX
        </div>

        <nav style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
          <a href="#services" style={{ textDecoration: "none", color: "#111" }}>Services</a>
          <a href="#process" style={{ textDecoration: "none", color: "#111" }}>How It Works</a>
          <a href="#trust" style={{ textDecoration: "none", color: "#111" }}>Why Us</a>
          <a href="#contact" style={{ textDecoration: "none", color: "#111" }}>Contact</a>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section
        style={{
          padding: "90px 20px",
          textAlign: "center",
          background: "#f9fafb",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "20px", lineHeight: 1.2 }}>
          Fast, AI-Driven Web & Automation Solutions
        </h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "760px",
            margin: "0 auto 32px",
            color: "#374151",
          }}
        >
          AutomateX helps startups and businesses build web solutions and
          automate workflows without the hassle of hiring and managing developers.
          Founder-led execution with clear timelines and fixed pricing.
        </p>

        <Link href="/post-requirement" style={{ textDecoration: "none" }}>
          <span
            style={{
              display: "inline-block",
              padding: "14px 32px",
              backgroundColor: "#111827",
              color: "#ffffff",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Get a Free Consultation
          </span>
        </Link>
      </section>

      {/* ================= WHO IT’S FOR ================= */}
      <section style={{ padding: "70px 20px", background: "#ffffff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Built For Teams That Want Speed & Clarity
        </h2>

        <p
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            textAlign: "center",
            color: "#374151",
            fontSize: "16px",
          }}
        >
          AutomateX is designed for founders, startups, and growing businesses
          that need reliable execution without wasting weeks hiring freelancers
          or managing multiple vendors.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        style={{
          padding: "80px 20px",
          background: "#f3f4f6",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          What We Do
        </h2>

        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              title: "Web Development",
              desc: "Websites, dashboards, internal tools, and MVPs built for performance and scalability.",
            },
            {
              title: "Python Automation",
              desc: "Workflow automation, scraping, data processing, and time-saving scripts.",
            },
            {
              title: "API Integrations",
              desc: "Connect tools, automate data flow, and build reliable backend integrations.",
            },
            {
              title: "Optimization & Fixes",
              desc: "Improve performance, fix bottlenecks, and clean up existing systems.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "#ffffff",
                padding: "24px",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ color: "#374151", fontSize: "14px" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section
        id="process"
        style={{
          padding: "80px 20px",
          background: "#ffffff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          How AutomateX Works
        </h2>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gap: "20px",
          }}
        >
          {[
            "You share your requirement and goals",
            "We analyze the scope and shortlist the right expert",
            "You receive a fixed price and delivery timeline",
            "Work is executed, reviewed, and delivered",
          ].map((step, idx) => (
            <div
              key={idx}
              style={{
                padding: "20px",
                background: "#f9fafb",
                borderRadius: "8px",
                borderLeft: "4px solid #111827",
              }}
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section
        id="trust"
        style={{
          padding: "80px 20px",
          background: "#111827",
          color: "#ffffff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Why Businesses Trust AutomateX
        </h2>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gap: "16px",
            fontSize: "15px",
            color: "#e5e7eb",
          }}
        >
          <div>• Founder-led execution and accountability</div>
          <div>• Automation-first approach to save time and cost</div>
          <div>• Clear communication and transparent pricing</div>
          <div>• No middlemen, no unnecessary complexity</div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "#ffffff",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Start With a Free Consultation
        </h2>

        <p style={{ marginBottom: "30px", color: "#374151" }}>
          Share your requirement or contact us directly.
        </p>

        <p>📧 <strong>shebeaditya@gmail.com</strong></p>
        <p>📱 <strong>+91 9588659913</strong></p>

        <p style={{ marginTop: "24px", fontSize: "14px", color: "#6b7280" }}>
          No signup required. We respond personally.
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          padding: "24px",
          textAlign: "center",
          fontSize: "14px",
          background: "#f3f4f6",
          color: "#374151",
        }}
      >
        © {new Date().getFullYear()} <strong>AutomateX</strong> — Fast Automation. AI-Driven.
      </footer>
    </div>
  );
}
