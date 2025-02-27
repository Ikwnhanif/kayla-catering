import React from "react";
import { Button } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative px-6 py-24 sm:py-32">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-red-600 sm:text-4xl">
          Hubungi Kami
        </h2>
        <p className="mt-4 text-lg text-gray-600 font-roboto">
          Jika Anda memiliki pertanyaan, silakan hubungi kami!
        </p>
      </div>

      {/* Contact Section */}
      <div className="mx-auto mt-12 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <motion.div
          className="p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-gray-800">Hubungi Kami</h3>
          <p className="mt-3 text-gray-600">
            Kami siap membantu Anda! Silakan hubungi kami melalui:
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">
                📞 Telepon WhatsApp:
              </h4>
              <p className="text-gray-600">
                +62 821-3440-6948 / +62 813-9378-8688
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">📧 Email:</h4>
              <p className="text-gray-600">information@kaylacatering.id</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">📍 Alamat:</h4>
              <p className="text-gray-600">
                Jl. Parangtritis Km. 13, Bakulan, Patalan, Jetis, Bantul,
                Yogyakarta 55781
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-gray-800">Kirim Pesan</h3>
          <form className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pesan
              </label>
              <textarea
                required
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white font-semibold py-2 rounded-md hover:bg-pink-500 transition duration-200"
            >
              Kirim Pesan
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-semibold font-roboto text-red-600 text-center">
          Lokasi Kami
        </h3>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.8592654541058!2d110.34988707588928!3d-7.909766992113471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5597861e9ea3%3A0x183d4af52669054b!2sKayla%20Catering%2C%20Cake%2C%20Snack%20%26%20Bakery!5e0!3m2!1sid!2sid!4v1734695941050!5m2!1sid!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
