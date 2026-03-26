import avb from "../assets/avb.png";
import otp from "../assets/otp-project.png";
import ai from "../assets/ai-journal.png";
import narkol from "../assets/narkol.png";
import aakruthaa from "../assets/aakruthaa.png";
import ecommerce from "../assets/ecommerce.png";
import properties from "../assets/properties.png";
import craftedpixel from "../assets/craftedpixel.png";
import { useState } from "react";

const projects = [
  {
    title: "AVB ManPower Solutions",
    image: avb,
    tech: "React, HTML, CSS, SQL, auth",
    desc: "Delivering Skilled Talent , Driving Business Success.",
    liveUrl: "https://avb-consultancy.vercel.app/",
    githubUrl: "https://github.com/Ranjith683/AVB-Manpower-Solutions.git",
  },
  {
    title: "OTP Integration – Shopify",
    image: otp,
    tech: "React, Next.js, GraphQL, Prisma",
    desc: "Secure OTP authentication for international clients.",
    liveUrl: "https://zoketo-otp-superadmin.onrender.com/login",
    githubUrl: "https://www.shopify.com/in/partners",
  },
  {
    title: "AI Audio Journaling - AI-Thon",
    image: ai,
    tech: "AI Tools, Replit, Bolt AI",
    desc: "Smart voice journaling with noise removal and emotion-aware AI insights.",
    liveUrl: "https://github.com/Ranjith683",
    githubUrl: "https://github.com/Ranjith683/AI-Thon-ArreVoice.git",
  },
  {
    title: "Crafted Pixel Agency",
    image: craftedpixel,
    tech: "Reactjs, TailwindCss, ReactFrameWorks",
    desc: "Building brands, digital products, and experiences that leave a lasting mark.",
    liveUrl: "https://craft-pixel-agency.vercel.app/",
    githubUrl: "https://github.com/Ranjith683/CraftPixel_Agency_Task.git",
  },
  {
    title: "Narkol Ventures Freelance",
    image: narkol,
    tech: "React, HTML, CSS, SQL",
    desc: "Business website with performance optimization.",
    liveUrl: "https://preview--prd-quest-web.lovable.app/",
    githubUrl: "https://github.com/Ranjith683/prd-quest-web.git",
  },
  {
    title: "Aakruthaa Consultancy Freelance",
    image: aakruthaa,
    tech: "HTML, CSS, JavaScript",
    desc: "Driving business growth through scalable digital solutions.",
    liveUrl: "https://aakruthaa.vercel.app/",
    githubUrl: "https://github.com/Ranjith683/aakruthaa.git",
  },
  {
    title: "Trend-Hub E-commerce Website",
    image: ecommerce,
    tech: "HTML, CSS, JavaScript",
    desc: "Designed and developed as a learning e-commerce project.",
    liveUrl: "https://e-commerce-mmix.vercel.app/",
    githubUrl: "https://github.com/Ranjith683/E-commerce.git",
  },
  {
    title: "Rohini Properties Webflow Project",
    image: properties,
    tech: "Webflow, JavaScript",
    desc: "Smart property listings powered by Webflow CMS.",
    liveUrl: "https://demoproperties.webflow.io/",
    githubUrl: "https://webflow.com/login",
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
            <div
              key={p.title}
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

                {/* BUTTON */}
                <div className="mt-4 flex gap-3">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    className="flex-1 text-center px-3 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-100"
                  >
                    Live
                  </a>

                  <a
                    href={p.githubUrl}
                    target="_blank"
                    className="flex-1 text-center px-3 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-100"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
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
                <div
                  key={p.title}
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

                    {/* BUTTON */}
                    <div className="mt-4 flex gap-3">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-3 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-100 transition"
                      >
                        Live
                      </a>

                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-3 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-100 transition"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
