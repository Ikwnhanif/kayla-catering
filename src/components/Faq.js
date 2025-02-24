import { useState } from "react";
import { motion } from "framer-motion";
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
      <h2 className="text-3xl font-poppins font-semibold text-center text-gray-900 mb-10">
        Frequency Ask Question(FAQ)
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-poppins font-medium text-gray-900">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 font-roboto bg-white text-gray-700"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
