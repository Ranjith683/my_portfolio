import { motion } from "framer-motion";

export default function Navbar() {
  const name = "Ranjith Kumar";

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white text-red p-4 z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="font-bold flex">
          {name.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>
        <div className="space-x-8">
          <a
            href="#about"
            className="px-3 py-2 hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:text-white hover:font-bold hover:scale-95 hover:rounded-lg transition-all cursor-pointer"
          >
            About
          </a>
          <a
            href="#experience"
            className="px-3 py-2 hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:text-white hover:font-bold hover:scale-95 hover:rounded-lg transition-all cursor-pointer"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="px-3 py-2 hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:text-white hover:font-bold hover:scale-95 hover:rounded-lg transition-all cursor-pointer"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="px-3 py-2 hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:text-white hover:font-bold hover:scale-95 hover:rounded-lg transition-all cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
