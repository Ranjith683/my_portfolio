const skills = [
  {
    name: "React.js",
    image: "https://cdn.simpleicons.org/react",
  },
  {
    name: "JavaScript (ES6+)",
    image: "https://cdn.simpleicons.org/javascript",
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.simpleicons.org/tailwindcss",
  },
  {
    name: "Node.js",
    image: "https://cdn.simpleicons.org/nodedotjs",
  },
  {
    name: "MongoDB",
    image: "https://cdn.simpleicons.org/mongodb",
  },
  {
    name: "GraphQL",
    image: "https://cdn.simpleicons.org/graphql",
  },
  { name: "REST APIs", image: "https://cdn.simpleicons.org/postman" },
  {
    name: "Webflow CMS",
    image: "https://cdn.simpleicons.org/webflow",
  },
  {
    name: "Shopify",
    image: "https://cdn.simpleicons.org/shopify",
  },
  {
    name: "GitHub",
    image: "https://cdn.simpleicons.org/github",
  },
  {
    name: "Vercel",
    image: "https://cdn.simpleicons.org/vercel",
  },
];

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto text-left py-10 bg-white">
      <h2
        className="relative inline-block text-3xl font-bold mb-10 
  after:content-[''] after:absolute after:left-0 after:-bottom-2
  after:w-16 after:h-1 after:bg-gradient-to-r after:from-purple-600 after:to-indigo-500
  after:rounded-full after:transition-all after:duration-300
  hover:after:w-full hover:after:shadow-lg hover:after:shadow-purple-500/50"
      >
        Skills
      </h2>
      <div className="p-3 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 rounded 
    flex flex-col items-center
    transition-all duration-300
    shadow-md shadow-purple-500/20
    hover:scale-105
    hover:shadow-xl hover:shadow-purple-500/40
    bg-white"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-20 h-20 mb-2"
            />
            <span className="text-center font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
