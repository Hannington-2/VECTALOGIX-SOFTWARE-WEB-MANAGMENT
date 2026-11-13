import React from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCloud,
  FiCode,
  FiEye,
  FiGlobe,
  FiMail,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import {
  HiOutlineBolt,
  HiOutlineCog,
  HiOutlineCpuChip,
  HiOutlineHandRaised,
  HiOutlineLightBulb,
  HiOutlinePuzzlePiece,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

const About = () => {
  return (
    <div className="bg-white text-slate-800">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <HiOutlineSparkles className="h-4 w-4" /> About Vectalogix Software
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Building Technology.
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              Empowering Businesses.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            We believe technology should do more than support businesses — it
            should empower them to grow, innovate, and achieve more.
          </p>
          <p className="mx-auto mt-4 max-w-xl font-medium text-indigo-300">
            We don't just build software. We build solutions that move
            businesses forward.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
            >
              Explore Our Services <FiArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Our Team <FiMail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A technology partner built around your business
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Vectalogix Software is a technology solutions company committed
              to helping businesses embrace the opportunities of the digital
              world. We specialize in developing modern software solutions that
              simplify operations, improve efficiency, enhance customer
              experiences, and support sustainable business growth.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Every business has unique challenges. That is why we take a
              tailored approach — designing solutions around the specific
              needs, objectives, and workflows of each organization.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-cyan-50 p-8">
            <p className="text-lg font-medium italic text-slate-700">
              "We see technology as a strategic tool for progress — not just a
              collection of applications and systems."
            </p>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <FiTarget className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              To empower businesses and organizations through innovative,
              reliable, and intelligent software solutions that simplify
              operations, solve complex challenges, and create opportunities
              for growth.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
              <FiEye className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              To become a trusted technology partner recognized for
              transforming ideas into impactful digital solutions and shaping a
              future where businesses operate smarter through technology and
              innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Solutions designed to help you grow confidently
          </h2>
          <p className="mt-4 text-slate-600">
            We help businesses operate efficiently, compete effectively, and
            grow with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.desc}</p>
              <ul className="mt-4 space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== APPROACH ===== */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
              Our Approach
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Great technology begins with understanding the problem
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
              >
                <span className="text-3xl font-bold text-indigo-400">
                  {step.num}
                </span>
                <h3 className="mt-3 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Why Choose Vectalogix Software?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <reason.icon className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Our Core Values
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              The principles behind everything we build
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold">{value.title}</h3>
                <p className="mt-2 text-xs text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMITMENT TO FUTURE ===== */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-cyan-600 p-10 text-white md:p-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Commitment to the Future
          </h2>
          <p className="mt-4 max-w-3xl text-indigo-50 leading-relaxed">
            Technology never stands still, and neither do we. We are committed
            to continuous learning, innovation, and the development of
            solutions that respond to the changing needs of businesses and
            society.
          </p>
          <p className="mt-3 max-w-3xl text-indigo-100 leading-relaxed">
            Our ambition is to build technology that does not simply follow the
            future but contributes to creating it.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        id="contact"
        className="bg-slate-900 py-20 text-center text-white"
      >
        <div className="mx-auto max-w-3xl px-6">
          <HiOutlineLightBulb className="mx-auto h-10 w-10 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            Let's Build Something That Matters
          </h2>
          <p className="mt-4 text-slate-300">
            Have an idea, a business challenge, or a project that needs the
            right technology? Let's turn your ideas into intelligent digital
            solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-semibold transition hover:bg-indigo-400"
            >
              Explore Our Services <FiArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Contact Our Team <FiMail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ===== DATA ===== */

const services = [
  {
    icon: FiCode,
    title: "Custom Software Development",
    desc: "Software applications tailored to specific business requirements.",
    items: [
      "Business management systems",
      "Enterprise & CRM systems",
      "Inventory & operations platforms",
      "Custom web-based business platforms",
    ],
  },
  {
    icon: FiGlobe,
    title: "Website Design & Development",
    desc: "Modern, responsive websites that establish a strong digital presence.",
    items: [
      "Corporate & e-commerce sites",
      "Responsive web design",
      "Maintenance & optimization",
      "SEO foundations",
    ],
  },
  {
    icon: HiOutlineCog,
    title: "Automation & Digital Transformation",
    desc: "Reduce manual work and improve operational efficiency.",
    items: [
      "Workflow automation",
      "System integrations",
      "Digital document management",
      "Automated reporting",
    ],
  },
  {
    icon: HiOutlineCpuChip,
    title: "AI & Intelligent Solutions",
    desc: "AI-powered tools that help organizations work smarter.",
    items: [
      "AI-powered business apps",
      "Intelligent data processing",
      "Automated information analysis",
      "Intelligent workflows",
    ],
  },
  {
    icon: HiOutlinePuzzlePiece,
    title: "API Development & Integration",
    desc: "Secure, reliable integrations between systems.",
    items: [
      "REST API development",
      "Payment gateway integrations",
      "Data exchange & sync",
      "Backend architecture",
    ],
  },
  {
    icon: FiCloud,
    title: "Cloud Solutions & Infrastructure",
    desc: "Reliable infrastructure to support your applications.",
    items: [
      "Cloud deployment",
      "Hosting & DNS management",
      "Performance optimization",
      "Scalable architecture",
    ],
  },
];

const steps = [
  { num: "01", title: "Discover", desc: "We understand your business, challenges, and objectives." },
  { num: "02", title: "Plan", desc: "We define requirements and a clear development roadmap." },
  { num: "03", title: "Design & Develop", desc: "We turn ideas into practical solutions with collaboration." },
  { num: "04", title: "Test & Optimize", desc: "We evaluate functionality, performance, and security." },
  { num: "05", title: "Deploy & Support", desc: "We assist with implementation and ongoing support." },
];

const reasons = [
  { icon: HiOutlineSquares2X2, title: "Solutions Built Around Your Business", desc: "We understand your operations before recommending or developing a solution." },
  { icon: HiOutlineSparkles, title: "Innovation With Purpose", desc: "We embrace modern technology, but our priority is solving practical problems." },
  { icon: FiShield, title: "Quality & Reliability", desc: "Maintainable software, thoughtful development, and dependable digital solutions." },
  { icon: FiTrendingUp, title: "Scalability & Growth", desc: "We design technology that can grow with your business." },
  { icon: FiUsers, title: "A Partnership Approach", desc: "Built on communication, collaboration, transparency, and shared commitment." },
  { icon: HiOutlineBolt, title: "Performance Focused", desc: "Fast, optimized solutions that deliver real value from day one." },
];

const values = [
  { icon: HiOutlineLightBulb, title: "Innovation", desc: "Exploring better ways to solve problems." },
  { icon: FiShield, title: "Integrity", desc: "Honesty, transparency, and accountability." },
  { icon: FiCheckCircle, title: "Excellence", desc: "Quality in every solution we deliver." },
  { icon: FiTarget, title: "Customer Focus", desc: "Business needs at the center of our work." },
  { icon: HiOutlineRocketLaunch, title: "Continuous Growth", desc: "Learning and embracing emerging tech." },
];

export default About;