import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiCloud,
  FiCode,
  FiGlobe,
  FiZap,
} from "react-icons/fi";
import {
  HiOutlineCpuChip,
  HiOutlinePuzzlePiece,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
} from "react-icons/hi2";

const Services = () => {
  return (
    <div className="bg-white text-slate-800">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
        {/* Soft blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="pointer-events-none absolute top-20 right-0 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm">
                <HiOutlineSparkles className="h-4 w-4" /> Our Services
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Technology that{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    moves you
                  </span>
                  <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-indigo-200/60" />
                </span>{" "}
                forward
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
                From custom software to AI and cloud — we design, build, and
                support digital solutions that solve real business problems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#services-list"
                  className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
                >
                  Explore Services
                  <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <Link
                  to="/knowledge-hub"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <FiBookOpen className="h-4 w-4" /> Knowledge Hub
                </Link>
              </div>

              {/* Mini trust strip */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  50+ projects delivered
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  6 core services
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  24/7 support
                </div>
              </div>
            </div>

            {/* Right visual — floating service chips */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-100 to-cyan-100 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {services.slice(0, 4).map((s, i) => (
                  <div
                    key={s.slug}
                    className={`rounded-2xl border border-white bg-white/90 p-5 shadow-sm backdrop-blur ${
                      i % 2 === 0 ? "translate-y-0" : "translate-y-6"
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-900">
                      {s.title.split(" ").slice(0, 2).join(" ")}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {s.articleCount} articles
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES GRID ═══════════ */}
      <section id="services-list" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              What We Offer
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              End-to-end digital solutions
            </h2>
            <p className="mt-4 text-slate-600">
              Six core services, each tailored to your business and backed by
              in-depth articles in our Knowledge Hub.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <article
                key={service.slug}
                id={service.slug}
                className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                {/* Number watermark */}
                <span className="absolute right-6 top-5 text-5xl font-bold text-slate-100 transition group-hover:text-indigo-100">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-cyan-50 text-indigo-600 ring-1 ring-indigo-100 transition-all duration-300 group-hover:from-indigo-600 group-hover:to-cyan-500 group-hover:text-white group-hover:ring-0">
                  <service.icon className="h-7 w-7" />
                </div>

                <h3 className="relative mt-6 text-xl font-bold leading-snug text-slate-900">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="mt-5 space-y-2">
                  {service.items.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <Link
                    to={`/knowledge-hub?service=${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    <FiBookOpen className="h-4 w-4" />
                    {service.articleCount} articles
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-hover:bg-indigo-600 group-hover:text-white"
                    aria-label={`Discuss ${service.title}`}
                  >
                    <FiArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              How We Work
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              A simple process, focused on results
            </h2>
            <p className="mt-4 text-slate-600">
              From first conversation to deployment and beyond, we keep you
              involved every step of the way.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {process.map((step, i) => (
              <div
                key={step.num}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-sm font-bold text-white shadow-md shadow-indigo-500/20">
                  {step.num}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.desc}
                </p>
                {i < process.length - 1 && (
                  <FiArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-slate-300 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ KNOWLEDGE HUB PROMO ═══════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-8 md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  <FiBookOpen className="h-3.5 w-3.5" /> Knowledge Hub
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Learn before you build
                </h2>
                <p className="mt-4 text-slate-600">
                  Our growing library of in-depth articles covers every
                  service — written by the same team that builds your
                  solutions.
                </p>
                <Link
                  to="/knowledge-hub"
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  Browse All Articles
                  <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid gap-3">
                {knowledgePreview.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/knowledge-hub/${a.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-cyan-100 text-indigo-600">
                      <a.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-900">
                        {a.title}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {a.readTime} min read
                      </p>
                    </div>
                    <FiArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-indigo-600" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative overflow-hidden bg-slate-900 py-20 text-center text-white md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <HiOutlineRocketLaunch className="h-8 w-8 text-indigo-300" />
          </div>
          <h2 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to build something great?
          </h2>
          <p className="mt-5 text-slate-300">
            Tell us about your project or business challenge. We'll help you
            figure out the right solution — and build it with you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
            >
              Start a Project
              <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold backdrop-blur transition hover:bg-white/10"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ═══════════ DATA ═══════════ */

const services = [
  {
    slug: "custom-software",
    icon: FiCode,
    title: "Custom Software Development",
    description:
      "Software built around your exact workflows — from business management systems to full enterprise platforms.",
    items: [
      "Business management systems",
      "Enterprise applications",
      "CRM systems",
      "Inventory & operations management",
      "Financial & administrative apps",
      "Custom web-based business platforms",
    ],
    articleCount: 4,
  },
  {
    slug: "web-development",
    icon: FiGlobe,
    title: "Website Design & Development",
    description:
      "Modern, responsive websites that establish a strong digital presence and convert visitors into customers.",
    items: [
      "Corporate & business websites",
      "E-commerce platforms",
      "Web application development",
      "Responsive website design",
      "Website maintenance & optimization",
      "SEO foundations",
    ],
    articleCount: 3,
  },
  {
    slug: "automation",
    icon: FiZap,
    title: "Business Automation",
    description:
      "Intelligent digital processes that eliminate repetitive work and free your team to focus on growth.",
    items: [
      "Workflow automation",
      "Business process optimization",
      "System integrations",
      "Digital document management",
      "Automated reporting & notifications",
      "Process & operational management",
    ],
    articleCount: 3,
  },
  {
    slug: "ai",
    icon: HiOutlineCpuChip,
    title: "AI & Intelligent Solutions",
    description:
      "AI-powered applications that help you work smarter, decide faster, and unlock value from your data.",
    items: [
      "AI-powered business applications",
      "Intelligent data processing",
      "AI-assisted communication",
      "Automated information analysis",
      "Intelligent workflow solutions",
    ],
    articleCount: 3,
  },
  {
    slug: "api",
    icon: HiOutlinePuzzlePiece,
    title: "API Development & Integration",
    description:
      "Secure, reliable integrations that make your applications and business systems work as one.",
    items: [
      "REST API development",
      "Third-party service integrations",
      "Payment gateway integrations",
      "Business system connectivity",
      "Data exchange & synchronization",
      "Backend architecture",
    ],
    articleCount: 2,
  },
  {
    slug: "cloud",
    icon: FiCloud,
    title: "Cloud Solutions & Infrastructure",
    description:
      "Reliable, secure infrastructure that keeps your applications fast, available, and ready to scale.",
    items: [
      "Cloud application deployment",
      "Hosting & infrastructure setup",
      "Domain & DNS management",
      "Application performance optimization",
      "Security-conscious infrastructure",
      "Scalable application architecture",
    ],
    articleCount: 2,
  },
];

const process = [
  { num: "01", title: "Discover", desc: "We learn about your business, challenges, and goals." },
  { num: "02", title: "Plan", desc: "We define requirements, timeline, and a clear roadmap." },
  { num: "03", title: "Build", desc: "We design, develop, and keep you involved throughout." },
  { num: "04", title: "Launch & Support", desc: "We deploy, optimize, and support you beyond launch." },
];

const knowledgePreview = [
  { slug: "custom-software-vs-off-the-shelf", icon: FiCode, title: "Custom software vs off-the-shelf", readTime: 6 },
  { slug: "automate-your-business-in-30-days", icon: FiZap, title: "Automate your business in 30 days", readTime: 8 },
  { slug: "ai-for-small-business", icon: HiOutlineCpuChip, title: "AI for small business", readTime: 7 },
  { slug: "cloud-migration-checklist", icon: FiCloud, title: "Cloud migration checklist", readTime: 5 },
];

export default Services;