import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaHome,
  FaMailBulk,
  FaPhone,
  FaHeadphones,
  FaTimes,
  FaTimesCircle,
  FaClock,
} from "react-icons/fa";
import {
  FaFileContract,
  FaMailchimp,
  FaPrescriptionBottleMedical,
} from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-poppins font-bold mb-4 ml-2">
              Tentang Kami
            </h2>
            <p className="text-sm font-poppins font-thin text-gray-300">
              Kayla Catering adalah penyedia layanan katering yang berkomitmen
              menyajikan hidangan lezat dan berkualitas tinggi untuk berbagai
              acara, mulai dari pernikahan hingga acara perusahaan. Dengan
              pengalaman bertahun-tahun, kami menggunakan bahan-bahan segar dan
              resep yang teruji untuk memastikan setiap hidangan memuaskan. Tim
              profesional kami siap membantu Anda merencanakan setiap detail
              acara, menawarkan pilihan menu yang beragam, sehingga semua tamu
              dapat menikmati pengalaman kuliner yang tak terlupakan.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-poppins font-bold mb-4 items-center ml-2">
              Kontak
            </h2>
            <div className="flex mb-2 items-center">
              <FaHome size={32} /> {/* Ukuran ikon */}
              <a className="text-sm font-poppins font-thin text-gray-300 ml-2">
                Jl. Parangtritis Km. 13, Bakulan, Patalan, Jetis, Bantul,
                Yogyakarta 55781
              </a>
            </div>
            <div className="flex mb-2 items-center">
              <FaMailchimp size={24} />{" "}
              <p className="text-sm font-poppins font-thin text-gray-300 ml-2">
                kaylacatering@gmail.com
              </p>
            </div>
            <div className="flex mb-2 items-center">
              <FiSmartphone size={24} />{" "}
              <p className="text-sm font-poppins font-thin text-gray-300 ml-2">
                +62 821-3440-6948 / +62 813-9378-8688
              </p>
            </div>
            <h2 className="text-xl font-poppins font-bold mb-4 my-5 items-center">
              Working Hours
            </h2>
            <div className="flex mb-2 items-center">
              <FaClock size={24} />{" "}
              <p className="text-sm font-poppins font-semibold text-gray-300 ml-2">
                Mon - Friday
              </p>
              <p className="text-sm font-poppins font-thin text-gray-300 ml-2">
                08.00 - 16.00
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-poppins font-bold mb-4 ml-2">
              Social Media
            </h2>
            <div className="flex font-poppins font-thin items-center mb-2">
              <FaFacebook size={20} />{" "}
              <p href="#" className="text-gray-300  hover:text-white ml-2">
                Facebook
              </p>
            </div>
            <div className="flex font-poppins font-thin items-center mb-2">
              <FaInstagram size={20} />{" "}
              <p href="#" className="text-gray-300  hover:text-white ml-2">
                Instagram
              </p>
            </div>
            <div className="flex font-poppins font-thin items-center mb-2">
              <FaTwitter size={20} />{" "}
              <p href="#" className="text-gray-300  hover:text-white ml-2">
                Twitter
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t font-poppins font-thin border-gray-700 pt-4 text-center">
          <p className="text-sm">
            Copyrights © 2024 Kayla Catering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
