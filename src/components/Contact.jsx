export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me 😊</h2>
      <div className="flex gap-5 justify-center">
        <a
          href="tel:+918870101265"
          className="px-4 py-2 rounded transition-all duration-300
                     hover:text-transparent hover:bg-white hover:bg-clip-text
                     bg-gradient-to-r from-purple-600 to-indigo-500
                     hover:scale-110 font-semibold"
        >
          📞 +91 8870101265
        </a>
        <a
          href="mailto:ranjith80238023@gmail.com"
          className="px-4 py-2 rounded transition-all duration-300
                     hover:text-transparent hover:bg-white hover:bg-clip-text
                     bg-gradient-to-r from-purple-600 to-indigo-500
                     hover:scale-110 font-semibold"
        >
          ✉️ ranjith80238023@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/ranjith--kumar1998"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded transition-all duration-300
                     hover:text-transparent hover:bg-white hover:bg-clip-text
                     bg-gradient-to-r from-purple-600 to-indigo-500
                     hover:scale-110 font-semibold"
        >
          🔗 LinkedIn
        </a>{" "}
        <a
          href="https://github.com/Ranjith683"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded transition-all duration-300
                     hover:text-transparent hover:bg-white hover:bg-clip-text
                     bg-gradient-to-r from-purple-600 to-indigo-500
                     hover:scale-110 font-semibold"
        >
          🐱 GitHub
        </a>
      </div>
    </section>
  );
}
