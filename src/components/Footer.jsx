import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <a
      href="https://wa.me/918870101265"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 flex items-center justify-center
        rounded-full bg-green-500
        shadow-lg shadow-green-500/40
        hover:scale-110 hover:bg-green-600
        transition-all duration-300
      "
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
