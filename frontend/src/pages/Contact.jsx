import React, { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineSparkles,
} from "react-icons/hi2";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-100/60 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
            <HiOutlineChatBubbleLeftRight className="h-4 w-4" /> Get in Touch
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              great together
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Whether you have a specific project in mind, need help figuring out
            the right technology, or just want to explore possibilities — we're
            here to help.
          </p>
        </div>
      </section>

      {/* ═══════════ CONTACT FORM & INFO ═══════════ */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
          {/* Left Column: Contact Info (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
              <HiOutlineSparkles className="h-8 w-8 text-indigo-400" />
              <h2 className="mt-6 text-2xl font-bold">Contact Information</h2>
              <p className="mt-2 text-slate-300">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-indigo-300">
                    <FiMail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Email us</p>
                    <a
                      href="mailto:hello@vectalogix.com"
                      className="mt-1 block font-semibold hover:text-indigo-300 transition"
                    >
                      hello@vectalogix.co.ke
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-indigo-300">
                    <FiPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Call us</p>
                    <a
                      href="tel:+254700000000"
                      className="mt-1 block font-semibold hover:text-indigo-300 transition"
                    >
                      +254 742 091 562
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-indigo-300">
                    <FiMapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Visit us</p>
                    <p className="mt-1 font-semibold">
                      Nairobi, Kenya
                      <br />
                      <span className="text-sm font-normal text-slate-400">
                        (Remote & On-site available)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form (Spans 3 columns on large screens) */}
          <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <FiCheckCircle className="h-10 w-10" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Message Sent!
                </h3>
                <p className="mt-2 max-w-sm text-slate-600">
                  Thank you for reaching out. We've received your message and
                  will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      placeholder="first name"
                      className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      placeholder="last name"
                      className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="your email"
                    className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    What can we help with?
                  </label>
                  <select
                    id="subject"
                    required
                    defaultValue=""
                    className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 transition focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value="" disabled>
                      Select a topic...
                    </option>
                    <option value="custom-software">
                      Custom Software Development
                    </option>
                    <option value="web">Website Design & Development</option>
                    <option value="automation">
                      Business Automation & AI
                    </option>
                    <option value="api">API & Cloud Solutions</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us a little about your business and what you're trying to achieve..."
                    className="mt-2 block w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-slate-800 disabled:opacity-70"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <FiSend className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;