import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apa saja layanan catering yang tersedia?",
    answer:
      "Kami menyediakan catering untuk pernikahan, ulang tahun, corporate event, dan banyak lagi.",
  },
  {
    question: "Apakah bisa custom menu sesuai permintaan?",
    answer:
      "Tentu! Anda bisa menyesuaikan menu sesuai dengan kebutuhan dan preferensi Anda.",
  },
  {
    question: "Berapa harga per paket catering?",
    answer:
      "Harga bervariasi tergantung jenis makanan dan jumlah porsi. Silakan hubungi kami untuk informasi lebih lanjut.",
  },
  {
    question: "Apakah bisa pesan untuk jumlah kecil?",
    answer:
      "Ya, kami menerima pesanan mulai dari 20 porsi dengan harga yang terjangkau.",
  },
  {
    question: "Apakah ada layanan delivery?",
    answer: "Ya, kami menyediakan layanan antar ke lokasi acara Anda.",
  },
  {
    question: "Bagaimana cara pembayaran?",
    answer:
      "Kami menerima pembayaran via transfer bank, e-wallet, dan tunai di tempat.",
  },
  {
    question: "Apakah ada menu vegetarian atau vegan?",
    answer:
      "Tentu! Kami menyediakan berbagai pilihan menu sehat, termasuk vegetarian dan vegan.",
  },
  {
    question: "Berapa lama waktu pemesanan sebelum acara?",
    answer:
      "Kami menyarankan minimal 3 hari sebelum acara untuk memastikan ketersediaan menu.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto pt-28 px-6 py-16">
      <h2 className="text-4xl font-poppins font-bold text-center text-red-600 mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white"
          >
            <button
              className={`w-full flex justify-between items-center p-5 text-left transition-all ${
                openIndex === index
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-900"
              } hover:bg-red-500 hover:text-white rounded-lg`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 text-gray-700 font-roboto bg-gray-50 rounded-b-lg"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
