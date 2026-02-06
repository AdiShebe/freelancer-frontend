import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">

      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">AutomateX</div>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#process" className="hover:text-blue-600">How It Works</a>
            <a href="#trust" className="hover:text-blue-600">Why Us</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fast, AI-Driven Web & Automation Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            AutomateX helps startups and businesses build web solutions and
            automate workflows without the hassle of hiring or managing developers.
            Founder-led execution with clear timelines and fixed pricing.
          </p>

          <div className="mt-10">
            <Link
              href="/post-requirement"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-base font-medium transition"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Built for Teams That Want Speed & Clarity
          </h2>
          <p className="text-gray-600">
            Designed for founders, startups, and growing teams who need reliable
            execution without delays or vendor chaos.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Web Development",
                desc: "Dashboards, MVPs, internal tools built for speed and scale.",
              },
              {
                title: "Python Automation",
                desc: "Scraping, workflow automation, and custom scripts.",
              },
              {
                title: "API Integrations",
                desc: "Connect systems and automate data flow.",
              },
              {
                title: "Optimization & Fixes",
                desc: "Improve performance and fix critical issues.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl border hover:shadow-md transition"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            How AutomateX Works
          </h2>

          <div className="space-y-4">
            {[
              "You share your requirement and goals",
              "We analyze scope and plan execution",
              "You get fixed pricing & timeline",
              "Work is delivered and reviewed",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-gray-50 border-l-4 border-blue-600 p-4 rounded"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section id="trust" className="bg-gray-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Why Businesses Trust AutomateX
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>• Founder-led execution & accountability</li>
            <li>• Automation-first mindset to save time & cost</li>
            <li>• Transparent pricing & communication</li>
            <li>• Faster than agencies, more reliable than freelancers</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Start With a Free Consultation
        </h2>

        <p className="text-gray-600 mb-8">
          Share your requirement or contact us directly.
        </p>

        <p className="font-medium">📧 shebeaditya@gmail.com</p>
        <p className="font-medium">📱 +91 9588659913</p>

        <p className="mt-6 text-sm text-gray-500">
          No signup required. We reply personally.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} <strong>AutomateX</strong> — Fast Automation. AI-Driven.
      </footer>
    </div>
  );
}
