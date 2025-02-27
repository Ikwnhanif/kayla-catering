import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);
  const whatsappNumber = "6282134406948"; // Ganti dengan nomor WA kamu
  const defaultMessage = encodeURIComponent(
    "Halo, saya ingin bertanya tentang layanan Kayla Catering."
  ); // Pesan default

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
      {/* Tombol Scroll Up */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 bg-white border border-red-500 text-red-500 rounded-full shadow-md hover:bg-red-500 hover:text-white transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}

      {/* Tombol WhatsApp */}
      <div className="flex flex-col items-center space-y-1">
        <motion.a
          href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1], // Efek berdenyut
              rotate: [0, -5, 5, 0], // Efek sedikit bergoyang
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
          >
            <FaWhatsapp className="w-7 h-7" />
          </motion.div>
        </motion.a>

        {/* Teks "WhatsApp Sekarang" */}
        <motion.span
          className="text-sm font-semibold text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          WhatsApp Sekarang
        </motion.span>
      </div>
    </div>
  );
};

export default FloatingButtons;
