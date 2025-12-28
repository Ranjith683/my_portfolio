export default function Contact() {
  return (
    <section
      id="contact"
      className="py-14 sm:py-16 lg:py-20 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Contact Me 😊</h2>

        {/* Contact Links */}
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:flex lg:justify-center
            gap-4 sm:gap-5
          "
        >
          <a
            href="tel:+918870101265"
            className="px-4 py-3 rounded
              transition-all duration-300
              bg-gradient-to-r from-purple-600 to-indigo-500
              hover:text-transparent hover:bg-white hover:bg-clip-text
              hover:scale-105 font-semibold"
          >
            📞 +91&nbsp;8870101265
          </a>

          <a
            href="mailto:ranjith80238023@gmail.com"
            className="px-4 py-3 rounded
              transition-all duration-300
              bg-gradient-to-r from-purple-600 to-indigo-500
              hover:text-transparent hover:bg-white hover:bg-clip-text
              hover:scale-105 font-semibold"
          >
            ✉️ ranjith80238023@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/ranjith--kumar1998"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded
              transition-all duration-300
              bg-gradient-to-r from-purple-600 to-indigo-500
              hover:text-transparent hover:bg-white hover:bg-clip-text
              hover:scale-105 font-semibold"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://github.com/Ranjith683"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded
              transition-all duration-300
              bg-gradient-to-r from-purple-600 to-indigo-500
              hover:text-transparent hover:bg-white hover:bg-clip-text
              hover:scale-105 font-semibold"
          >
            🐱 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
