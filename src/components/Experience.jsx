import { useState } from "react";

const experiences = [
  {
    id: 1,
    company: "Quartr Design Solutions",
    role: "Web Developer | Apr 2025 – Dec 2025",
    points: [
      "Shopify OTP authentication & GraphQL APIs",
      "Webflow CMS & animations",
      "Figma to pixel-perfect UI",
    ],
  },
  {
    id: 2,
    company: "SkyApps Software",
    role: "Software Trainee | Aug 2024 – Sep 2024",
    points: [
      "Software development lifecycle (SDLC – basics)",
      "Code collaboration & team workflows",
      "Bug fixing & feature support",
      "Learning-focused development environment",
    ],
  },
  {
    id: 3,
    company: "Humcode Technologies",
    role: "Front-End Web Developer | Jul 2023 – Dec 2023",
    points: [
      "HTML5, CSS3, JavaScript & UI improvements",
      "Transition from non-technical to technical role",
      "Responsive layouts and bug fixing",
    ],
  },
  {
    id: 4,
    company: "Saratha Feeds & Foods",
    role: "Junior Analyst | Jul 2021 – Jun 2023",
    points: [
      "Sales, purchase & inventory analysis",
      "MS Excel (VLOOKUP, Pivot, formulas), Tally Prime",
      "Data-driven decision support",
    ],
  },
];

export default function Experience() {
  const [openId, setOpenId] = useState(null);

  const toggleCard = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="experience" className="bg-gray-100 py-14">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2
          className="relative inline-block text-2xl sm:text-3xl font-bold mb-10
          after:content-[''] after:absolute after:left-0 after:-bottom-2
          after:w-14 after:h-1 after:bg-gradient-to-r
          after:from-purple-600 after:to-indigo-500 after:rounded-full"
        >
          Experience
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((exp) => {
            const isOpen = openId === exp.id;

            return (
              <div
                key={exp.id}
                className={`p-6 rounded shadow transition-all duration-300 cursor-pointer
                ${
                  isOpen
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600"
                    : "bg-white"
                }`}
                onClick={() => toggleCard(exp.id)}
                onMouseEnter={() =>
                  window.innerWidth >= 1024 && setOpenId(exp.id)
                }
                onMouseLeave={() =>
                  window.innerWidth >= 1024 && setOpenId(null)
                }
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3
                      className={`font-bold transition-colors
                      ${isOpen ? "text-white" : "text-gray-900"}`}
                    >
                      {exp.company}
                    </h3>
                    <p
                      className={`text-sm transition-colors
                      ${isOpen ? "text-gray-200" : "text-gray-500"}`}
                    >
                      {exp.role}
                    </p>
                  </div>

                  <span
                    className={`text-xl transition-transform duration-300
                    ${isOpen ? "rotate-180 text-white" : "text-gray-700"}`}
                  >
                    ▼
                  </span>
                </div>

                {isOpen && (
                  <ul className="list-disc ml-6 mt-4 text-white space-y-1">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
