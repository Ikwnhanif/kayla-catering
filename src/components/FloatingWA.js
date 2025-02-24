import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const whatsappNumber = "6282134406948"; // Ganti dengan nomor WA kamu
  const defaultMessage = encodeURIComponent(
    "Halo, saya ingin bertanya tentang layanan kayla catering."
  ); // Pesan default

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600"
      initial={{ opacity: 0, y: 50 }} // Animasi masuk
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Animasi ikon berdenyut & bergoyang */}
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
  );
};

export default FloatingWhatsApp;
