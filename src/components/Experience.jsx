import { useState } from "react";

const experiences = [
  {
    id: 1,
    company: "Quartr Design Solutions",
    role: "Front End Developer | Apr 2025 – Dec 2025",
    points: [
      "Implemented OTP-based authentication and integrated GraphQL APIs in Shopify projects",
      "Built and managed websites using Webflow CMS, including animations and dynamic content",
      "Converted Figma designs into pixel-perfect, responsive user interfaces",
      "Skills : Shopify-PolarisUI-API's-Webflow(CMS & Animations)",
    ],
  },
  {
    id: 2,
    company: "Freelancer-WebFlow",
    role: "Web Developer | Nov 2024 – Apr 2025",
    points: [
      "Website Developer delivering responsive and user-focused web solutions",
      "Building scalable web applications using Webflow",
      "Developing Full stack Web Applications using React.js/Node.js(Express)/MangoDB ",
      " Leveraging AI Tools like Cursor Copilot for Smarter Development",
      "Skills : React.js-Node(Express.js)-MangoDB-WebFlow Tool",
    ],
  },
  {
    id: 3,
    company: "SkyApps Software",
    role: "Software Developer Intern | Aug 2024 – Sep 2024",
    points: [
      "Software development lifecycle (SDLC – basics)",
      "Code collaboration & team workflows",
      "Bug fixing & feature support",
      "Learned Python programming fundamentals and applied them in basic application development tasks",
      "Skills : SDLC-Python-GitHub",
    ],
  },
  {
    id: 4,
    company: "Humcode Technologies",
    role: "FrontEnd Developer-Trainee | Jul 2023 – Aug 2024",
    points: [
      "Learned and applied HTML5, CSS3, JavaScript, and modern layout techniques (Flexbox, Grid) to build responsive user interfaces",
      "Actively learned Wix Editor customization, responsive design principles, and basic website optimization techniques",
      "Responsive layouts and bug fixing",
      "Skills : Html-Css-JavaScript-Wix Website Builder",
    ],
  },
  // {
  //   id: 4,
  //   company: "Saratha Feeds & Foods",
  //   role: "Junior Analyst | Jul 2021 – Jun 2023",
  //   points: [
  //     "Sales, purchase & inventory analysis",
  //     "MS Excel (VLOOKUP, Pivot, formulas), Tally Prime",
  //     "Data-driven decision support",
  //   ],
  // },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
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
