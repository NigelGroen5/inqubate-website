"use client";

import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 mx-auto w-[min(1280px,92%)] py-16">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-lg text-white/85">
            Have questions? Want to get involved? Drop us a message.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative z-10 mx-auto w-[min(1280px,92%)] py-8 pb-16">
        <div className="mx-auto max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-md md:p-12"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-md transition focus:border-white/40 focus:bg-white/10 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-md transition focus:border-white/40 focus:bg-white/10 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-md transition focus:border-white/40 focus:bg-white/10 focus:outline-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-white/90"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-white/60">Or reach us directly at</p>
            <a
              href="mailto:hello@inqubate.com"
              className="mt-2 inline-block text-lg font-semibold transition hover:text-white/80"
            >
              hello@inqubate.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
