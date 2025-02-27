import React from "react";
import { FaFacebook, FaInstagram, FaHome, FaClock } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-poppins font-bold mb-4 ">
              Tentang Kami
            </h2>
            <p className="text-sm font-poppins font-thin text-gray-300">
              Selamat datang di Kayla catering, dengan senang hati kami hadir
              dihadapan anda semua untuk menyajikan hidangan dan pelayanan
              terbaik dari kami.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-poppins font-bold mb-4 items-center">
              Kontak
            </h2>
            <div className="flex mb-2 items-center">
              <FaHome size={32} /> {/* Ukuran ikon */}
              <a className="text-sm font-poppins font-thin text-gray-300 ml-2">
                Jl. Parangtritis Km.13, Timur Perempatan Bakulan 20 meter,
                Patalan, Jetis, Bantul
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
            <h2 className="text-xl font-poppins font-bold mb-4 ">
              Social Media
            </h2>
            <div className="flex font-poppins font-thin items-center mb-2">
              <img src="/images/mbiz.svg" alt="MbizLogo" className="h-5" />
              <a
                href="https://www.mbizmarket.co.id/p/kayla-catering-cake-snack-bakery-p1X1/catalog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white ml-2"
              >
                Mbiz Market
              </a>
            </div>
            <div className="flex font-poppins font-thin items-center mb-2">
              <FaFacebook size={20} />
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white ml-2"
              >
                Facebook
              </a>
            </div>

            <div className="flex font-poppins font-thin items-center mb-2">
              <FaInstagram size={20} />
              <a
                href="https://www.instagram.com/kaylacakesnackbakery/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white ml-2"
              >
                Instagram
              </a>
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
