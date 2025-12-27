export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto text-left">
        <h2
          className="relative inline-block text-3xl font-bold mb-6 
  after:content-[''] after:absolute after:left-0 after:-bottom-2
  after:w-16 after:h-1 after:bg-gradient-to-r after:from-purple-600 after:to-indigo-500
  after:rounded-full after:transition-all after:duration-300
  hover:after:w-full hover:after:shadow-lg hover:after:shadow-purple-500/50"
        >
          About Me
        </h2>
        <p className="py-5 text-black-700">
          I’m a passionate Frontend / Full Stack Developer who enjoys building
          dynamic and responsive web applications. I work across both front-end
          and back-end technologies to create user-friendly, high-performance
          solutions.
        </p>
        <p className="py-5 text-black-700">
          My skill set includes React.js, Node.js, MongoDB, and modern UI
          frameworks, with a strong focus on clean design, scalability, and
          performance optimization. I enjoy collaborating with teams, improving
          application efficiency, and supporting production-ready systems.
        </p>
        <p className="py-5 text-black-700">
          I believe in continuous learning and actively explore new tools and
          technologies to enhance my skills. My goal is to build scalable,
          secure, and impactful digital products that deliver real value.
        </p>
      </div>
    </section>
  );
}
