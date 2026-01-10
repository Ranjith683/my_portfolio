import otp from "../assets/otp-project.png";
import ai from "../assets/ai-journal.png";
import narkol from "../assets/narkol.png";
import aakruthaa from "../assets/aakruthaa.png";
import ecommerce from "../assets/ecommerce.png";
import properties from "../assets/properties.png";
import { useState } from "react";

const projects = [
  {
    title: "OTP Integration – Shopify",
    image: otp,
    tech: "React, Next.js, GraphQL, Prisma",
    desc: "Secure OTP authentication for international clients.",
    liveUrl: "https://zoketo-otp-superadmin.onrender.com/login",
  },
  {
    title: "AI Audio Journaling - AI-Thon",
    image: ai,
    tech: "AI Tools, Replit, Bolt AI",
    desc: "Smart voice journaling with noise removal and emotion-aware AI insights.",
    liveUrl: "https://github.com/Ranjith683",
  },
  {
    title: "Narkol Ventures Freelance",
    image: narkol,
    tech: "React, HTML, CSS, SQL",
    desc: "Business website with performance optimization.",
    liveUrl: "https://preview--prd-quest-web.lovable.app/",
  },
  {
    title: "Aakruthaa Consultancy Freelance",
    image: aakruthaa,
    tech: "HTML, CSS, JavaScript",
    desc: "Driving business growth through scalable digital solutions.",
    liveUrl: "https://aakruthaa.vercel.app/",
  },
  {
    title: "Trend-Hub E-commerce Website",
    image: ecommerce,
    tech: "HTML, CSS, JavaScript",
    desc: "Designed and developed as a learning e-commerce project.",
    liveUrl: "https://e-commerce-mmix.vercel.app/",
  },
  {
    title: "Rohini Properties Webflow Project",
    image: properties,
    tech: "Webflow, JavaScript",
    desc: "Smart property listings powered by Webflow CMS.",
    liveUrl: "https://demoproperties.webflow.io/",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const maxIndex = projects.length - visibleCards;

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold mb-10 relative inline-block">
          Projects
          <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full"></span>
        </h2>

        {/* ================= MOBILE & TABLET VIEW ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.liveUrl}
              target="_blank"
              className="shadow rounded overflow-hidden hover:scale-105 transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.tech}</p>
                <p className="mt-2">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* ================= DESKTOP SLIDER ================= */}
        <div className="hidden lg:block">
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 rounded-full bg-purple-300 text-white
            hover:bg-purple-500 transition shadow-lg"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 rounded-full bg-purple-300 text-white
            hover:bg-purple-500 transition shadow-lg"
          >
            ›
          </button>

          <div className="overflow-hidden mt-10">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 40}%)`,
              }}
            >
              {projects.map((p) => (
                <a
                  key={p.title}
                  href={p.liveUrl}
                  target="_blank"
                  className="min-w-[33.333%] shadow rounded overflow-hidden hover:scale-105 transition"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold">{p.title}</h3>
                    <p className="text-sm text-gray-500">{p.tech}</p>
                    <p className="mt-2">{p.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
