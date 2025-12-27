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
    liveUrl: "https://github.com/Ranjith683",
  },
  {
    title: "AI Audio Journaling -AI-Thon",
    image: ai,
    tech: "AI Tools, Replit, Bolt AI",
    desc: "Smart voice journaling with noise removal and emotion-aware AI insights..",
    liveUrl: "https://github.com/Ranjith683",
  },
  {
    title: "Narkol Venturess Freelance",
    image: narkol,
    tech: "React, HTML, CSS, SQL",
    desc: "Business website with performance optimization.",
    liveUrl: "https://preview--prd-quest-web.lovable.app/",
  },
  {
    title: "Aakruthaa-Consultancy Freelance",
    image: aakruthaa,
    tech: "Html, Css, JavaScript",
    desc: "Driving Business Growth Through Scalable Digital Solutions.",
    liveUrl: "https://aakruthaa.vercel.app/",
  },
  {
    title: "Trend-Hub E-commerce website",
    image: ecommerce,
    tech: "Html, Css, JavaScript",
    desc: "Designed and Developed as a Learning E-Commerce Project.",
    liveUrl: "https://e-commerce-mmix.vercel.app/",
  },
  {
    title: "Rohini-Properties WebFlow Project",
    image: properties,
    tech: "WebFlow-Tool, JavaScript",
    desc: "Smart property listings powered by Webflow CMS & Nested CMS.",
    liveUrl: "https://demoproperties.webflow.io/",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = projects.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto text-left relative">
        <h2
          className="relative inline-block text-3xl font-bold mb-15 
  after:content-[''] after:absolute after:left-0 after:-bottom-2
  after:w-16 after:h-1 after:bg-gradient-to-r after:from-purple-600 after:to-indigo-500
  after:rounded-full after:transition-all after:duration-300
  hover:after:w-full hover:after:shadow-lg hover:after:shadow-purple-500/50"
        >
          Projects
        </h2>

        <div className="flex justify-center gap-4 mb-6">
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
        </div>

        <div className="overflow-hidden mt-10">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 33.333}%)`,
            }}
          >
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.liveUrl}
                target="_blank"
                className="min-w-[33.333%] shadow rounded overflow-hidden hover:scale-105 transition flex flex-col h-full"
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
    </section>
  );
}
