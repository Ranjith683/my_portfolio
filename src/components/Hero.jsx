import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen
        flex flex-col-reverse md:flex-row
        items-center justify-center md:justify-between
        bg-gradient-to-r from-black to-gray-900
        text-white
        px-6 md:px-10 lg:px-20
        gap-10"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-md"
      >
        <h1 className="text-4xl sm:text-5xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Hi I'm
        </h1>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-300 text-transparent bg-clip-text">
          Ranjith Kumar
        </h1>
        <p className="mt-6 text-base sm:text-lg lg:text-xl">
          Passionate Frontend / Full Stack Developer with 2 year of experience
          in crafting responsive websites and transforming ideas into
          functional, elegant digital experiences.
        </p>
        <p className="mt-3 text-gray-400 text-sm sm:text-base">
          Totally 3 Years Experience | Coimbatore
        </p>
      </motion.div>
      <motion.a
        href="https://drive.google.com/file/d/15izfG9NbWq7XeWp-_irUC1KaAVdAGO9t/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="
      absolute bottom-8 sm:bottom-10
          left-1/2 -translate-x-1/2
          px-6 sm:px-8 py-3 sm:py-4
          rounded-full font-semibold text-white
          bg-gradient-to-r from-purple-600 to-indigo-500
          shadow-lg shadow-purple-500/40
          hover:scale-110 hover:shadow-purple-500/70
          transition-all duration-300
    "
      >
        View My CV
      </motion.a>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-shrink-0"
      >
        <img
          src="https://img.freepik.com/premium-vector/gamer-man_961307-25037.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Ranjith Kumar"
          className="w-52 h-52
            sm:w-64 sm:h-64
            md:w-80 md:h-80
            lg:w-96 lg:h-96
            rounded-full
            object-cover
            shadow-lg"
        />
      </motion.div>
    </section>
  );
}
