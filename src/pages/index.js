import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans text-gray-900 bg-white">

      {/* ================= HEADER ================= */}
      <header className="w-full border-b bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold flex items-center gap-2">
            <span className="text-blue-600">⚡</span>
            AutomateX
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#pricing" className="hover:text-blue-600">Pricing</a>
            <a href="#usecases" className="hover:text-blue-600">Use Cases</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        className="py-32 text-center text-white relative"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            AI Automation for Real Business Problems
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            We build AI-powered tools, automation workflows, and custom systems
            that save hours of manual work and help your business scale faster.
          </p>

          <Link href="/post-requirement">
            <span className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg">
              Get Free Automation Plan
            </span>
          </Link>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What We Build</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["🤖", "AI Agents", "Custom AI agents for research, lead generation, and workflows."],
              ["⚙️", "Automation Workflows", "n8n, Python, and API automations for repetitive tasks."],
              ["📊", "Dashboards", "Internal tools and admin dashboards for your operations."],
              ["🕸️", "Web Scrapers", "Automated data collection from websites and job boards."],
              ["💬", "AI Chatbots", "Customer support and lead qualification bots."],
              ["🔗", "API Integrations", "Connect CRMs, payments, emails, and tools."],
            ].map(([icon, title, desc], idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 mb-12">
            Choose a package or request a custom automation plan.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* STARTER */}
            <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                Starter Automation
              </h3>
              <div className="text-3xl font-bold mb-6">
                $99
              </div>
              <ul className="text-sm text-gray-600 space-y-3 mb-8">
                <li>• One simple automation</li>
                <li>• Script or workflow</li>
                <li>• Basic setup</li>
                <li>• 2–3 day delivery</li>
              </ul>
              <Link href="/post-requirement">
                <span className="block bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
                  Get Started
                </span>
              </Link>
            </div>

            {/* BUSINESS */}
            <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-blue-600 transform scale-105">
              <h3 className="text-xl font-semibold mb-2">
                Business Automation
              </h3>
              <div className="text-3xl font-bold mb-6">
                $349
              </div>
              <ul className="text-sm text-gray-600 space-y-3 mb-8">
                <li>• Multi-step automation</li>
                <li>• API integrations</li>
                <li>• Basic dashboard</li>
                <li>• 4–7 day delivery</li>
              </ul>
              <Link href="/post-requirement">
                <span className="block bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
                  Choose Plan
                </span>
              </Link>
            </div>

            {/* AI SUITE */}
            <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                AI Automation Suite
              </h3>
              <div className="text-3xl font-bold mb-6">
                $999+
              </div>
              <ul className="text-sm text-gray-600 space-y-3 mb-8">
                <li>• Custom AI agent</li>
                <li>• Multi-tool integrations</li>
                <li>• Admin dashboard</li>
                <li>• 7–14 day delivery</li>
              </ul>
              <Link href="/post-requirement">
                <span className="block bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
                  Request Quote
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section
        className="py-24 text-white text-center relative"
        style={{
          backgroundImage: "url('/images/automation-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>

        <div className="relative">
          <h2 className="text-3xl font-bold mb-4">
            Ready to automate your business?
          </h2>
          <p className="mb-8 text-blue-100">
            Tell us your requirement and we’ll send a solution plan.
          </p>
          <Link href="/post-requirement">
            <span className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100">
              Start Free Consultation
            </span>
          </Link>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="text-gray-600 mb-8">
            Prefer direct contact? Reach out below.
          </p>

          <div className="text-gray-800">
            <p>📧 <strong>shebeaditya@gmail.com</strong></p>
            <p>📱 <strong>+91 9588659913</strong></p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-6 text-center text-sm bg-gray-100 text-gray-600">
        © {new Date().getFullYear()} AutomateX — AI Automation Studio
      </footer>
    </div>
  );
}
