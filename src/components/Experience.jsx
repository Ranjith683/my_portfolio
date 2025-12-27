import { useState } from "react";

export default function Experience() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <section id="experience" className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto text-left">
        <h2
          className="relative inline-block text-3xl font-bold mb-10 
  after:content-[''] after:absolute after:left-0 after:-bottom-2
  after:w-16 after:h-1 after:bg-gradient-to-r after:from-purple-600 after:to-indigo-500
  after:rounded-full after:transition-all after:duration-300
  hover:after:w-full hover:after:shadow-lg hover:after:shadow-purple-500/50"
        >
          Experience
        </h2>

        <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div
            className={`relative p-6 rounded shadow group h-fit transition-all duration-300
    ${
      open1 === 1
        ? "bg-gradient-to-r from-purple-600 to-indigo-600"
        : "bg-white"
    }
  `}
            onMouseEnter={() => setOpen1(1)}
            onMouseLeave={() => setOpen1(null)}
          >
            <div className="relative cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3
                    className={`font-bold transition-colors duration-300
            ${open1 === 1 ? "text-white" : "text-gray-900"}
          `}
                  >
                    Quartr Design Solutions
                  </h3>
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      open1 === 1 ? "text-gray-200" : "text-gray-500"
                    }
                  }`}
                  >
                    Web Developer | Apr 2025 – Dec 2025
                  </p>
                </div>
                <span
                  className={`transform transition-all duration-300 text-xl opacity-100 group-hover:opacity-100 ${
                    open1 === 1 ? "rotate-180 text-white" : "text-gray-700"
                  }`}
                >
                  ▼
                </span>
              </div>
              {open1 === 1 && (
                <ul
                  className={`list-disc ml-6 mt-4 transition-all duration-300 ${
                    open1 === 1 ? "text-white" : "text-gray-1000"
                  }`}
                >
                  <li>Shopify OTP authentication & GraphQL APIs</li>
                  <li>Webflow CMS & animations</li>
                  <li>Figma to pixel-perfect UI</li>
                </ul>
              )}
            </div>
          </div>

          <div
            className={`relative p-6 rounded shadow group h-fit transition-all duration-300
    ${
      open2 === 2
        ? "bg-gradient-to-r from-purple-600 to-indigo-600"
        : "bg-white"
    }
  `}
            onMouseEnter={() => setOpen2(2)}
            onMouseLeave={() => setOpen2(null)}
          >
            <div className="relative cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3
                    className={`font-bold transition-colors duration-300
            ${open2 === 2 ? "text-white" : "text-gray-900"}
          `}
                  >
                    SkyApps Software
                  </h3>
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      open2 === 2 ? "text-gray-200" : "text-gray-500"
                    }
                  }`}
                  >
                    Software Trainee | Aug 2024 – Sep 2024
                  </p>
                </div>
                <span
                  className={`transform transition-all duration-300 text-xl opacity-100 group-hover:opacity-100 ${
                    open2 === 2 ? "rotate-180 text-white" : "text-gray-700"
                  }`}
                >
                  ▼
                </span>
              </div>
              {open2 === 2 && (
                <ul
                  className={`list-disc ml-6 mt-4 transition-all duration-300 ${
                    open2 === 2 ? "text-white" : "text-gray-1000"
                  }`}
                >
                  <li>Software development lifecycle (SDLC – basics)</li>
                  <li>Code collaboration & team workflows</li>
                  <li>Bug fixing & feature support</li>
                  <li>Learning-focused development environment</li>
                </ul>
              )}
            </div>
          </div>

          <div
            className={`relative p-6 rounded shadow group h-fit transition-all duration-300
    ${
      open3 === 3
        ? "bg-gradient-to-r from-purple-600 to-indigo-600"
        : "bg-white"
    }
  `}
            onMouseEnter={() => setOpen3(3)}
            onMouseLeave={() => setOpen3(null)}
          >
            <div className="relative cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3
                    className={`font-bold transition-colors duration-300
            ${open3 === 3 ? "text-white" : "text-gray-900"}
          `}
                  >
                    Humcode Technologies
                  </h3>
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      open3 === 3 ? "text-gray-200" : "text-gray-500"
                    }
                  }`}
                  >
                    Front-End Web-Developer | Jul 2023 – Dec 2023
                  </p>
                </div>
                <span
                  className={`transform transition-all duration-300 text-xl opacity-100 group-hover:opacity-100 ${
                    open3 === 3 ? "rotate-180 text-white" : "text-gray-700"
                  }`}
                >
                  ▼
                </span>
              </div>
              {open3 === 3 && (
                <ul
                  className={`list-disc ml-6 mt-4 transition-all duration-300 ${
                    open3 === 3 ? "text-white" : "text-gray-1000"
                  }`}
                >
                  <li>
                    HTML5, CSS3, JavaScript and UI bug fixing & improvements
                  </li>
                  <li>
                    Transition from non-technical to technical role and Team
                    collaboration & learning mindset
                  </li>
                  <li>
                    Front-end development, HTML, CSS, JavaScript, UI design,
                    responsive layout, bug fixing, web developer, learner,
                    mentor-guided development
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div
            className={`relative p-6 rounded shadow group h-fit transition-all duration-300
    ${
      open4 === 4
        ? "bg-gradient-to-r from-purple-600 to-indigo-600"
        : "bg-white"
    }
  `}
            onMouseEnter={() => setOpen4(4)}
            onMouseLeave={() => setOpen4(null)}
          >
            <div className="relative cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3
                    className={`font-bold transition-colors duration-300
            ${open4 === 4 ? "text-white" : "text-gray-900"}
          `}
                  >
                    Saratha Feeds&Foods
                  </h3>
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      open4 === 4 ? "text-gray-200" : "text-gray-500"
                    }
                  }`}
                  >
                    Junior Analyst | Jul 2021 – Jun 2023
                  </p>
                </div>
                <span
                  className={`transform transition-all duration-300 text-xl opacity-100 group-hover:opacity-100 ${
                    open4 === 4 ? "rotate-180 text-white" : "text-gray-700"
                  }`}
                >
                  ▼
                </span>
              </div>
              {open4 === 4 && (
                <ul
                  className={`list-disc ml-6 mt-4 transition-all duration-300 ${
                    open4 === 4 ? "text-white" : "text-gray-1000"
                  }`}
                >
                  <li>
                    Data analysis & reporting and Sales, purchase & inventory
                    analysis
                  </li>
                  <li>
                    MS Excel (VLOOKUP, Pivot Tables, formulas) Tally Prime
                    (basic accounting & entries)
                  </li>
                  <li>
                    Data-driven decision support and Accuracy, attention to
                    detail & documentation
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
