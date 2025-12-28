const skills = [
  { name: "React.js", image: "https://cdn.simpleicons.org/react" },
  {
    name: "JavaScript (ES6+)",
    image: "https://cdn.simpleicons.org/javascript",
  },
  { name: "Tailwind CSS", image: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Node.js", image: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb" },
  { name: "GraphQL", image: "https://cdn.simpleicons.org/graphql" },
  { name: "REST APIs", image: "https://cdn.simpleicons.org/postman" },
  { name: "Webflow CMS", image: "https://cdn.simpleicons.org/webflow" },
  { name: "Shopify", image: "https://cdn.simpleicons.org/shopify" },
  { name: "GitHub", image: "https://cdn.simpleicons.org/github" },
  { name: "Vercel", image: "https://cdn.simpleicons.org/vercel" },
];

export default function Skills() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2
          className="relative inline-block text-2xl sm:text-3xl font-bold mb-10
          after:content-[''] after:absolute after:left-0 after:-bottom-2
          after:w-14 after:h-1 after:bg-gradient-to-r
          after:from-purple-600 after:to-indigo-500 after:rounded-full"
        >
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-lg bg-white
              flex flex-col items-center text-center
              transition-all duration-300
              shadow-md shadow-purple-500/20
              hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-3"
              />
              <span className="text-sm sm:text-base font-semibold">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
