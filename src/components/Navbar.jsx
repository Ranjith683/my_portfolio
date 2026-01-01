import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const name = "Ranjith kumar";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white shadow z-50 rounded-3xl"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* ================= LEFT (DESKTOP NAME) ================= */}
        <h1 className="font-bold text-lg hidden lg:flex">
          {name.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.08 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        {/* ================= CENTER NAME (MOBILE) ================= */}
        <h1 className="font-bold text-lg lg:hidden absolute left-1/2 -translate-x-1/2">
          {name}
        </h1>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden lg:flex space-x-8">
          {["about", "experience", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="px-3 py-2 hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 hover:text-white hover:font-bold hover:rounded-lg transition-all"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* ================= MOBILE MENU ICON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden ml-auto text-2xl"
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE DROPDOWN MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white shadow-md"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {["about", "experience", "projects", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block w-30 text-center py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 text-white font-medium transition-all duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
