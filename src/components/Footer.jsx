import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <a
      href="https://wa.me/918870101265"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed z-50
        bottom-4 right-4
        sm:bottom-5 sm:right-5
        lg:bottom-6 lg:right-6

        w-12 h-12
        sm:w-14 sm:h-14

        flex items-center justify-center
        rounded-full bg-green-500

        shadow-lg shadow-green-500/40
        transition-all duration-300

        hover:scale-110 hover:bg-green-600
        active:scale-95
      "
    >
      <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
    </a>
  );
}
