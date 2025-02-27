import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "./Services";
import Menus from "./Menus";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const heroRef = useRef(null);
  const blobRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        blobRef.current,
        { opacity: 0 },
        { opacity: 0.2, duration: 1, ease: "power3.out" }
      );
    });

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  const scrollToMenu = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" text-gray-900">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center  overflow-hidden"
      >
        {/* Blob Background */}
        <div
          ref={blobRef}
          className="absolute inset-0 -z-10 flex items-center justify-center"
        >
          <svg
            className="w-[800px] h-[800px] opacity-60 animate-float"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FF6B6B"
              d="M37.5,-55.1C48.7,-48.3,58,-38.3,64.1,-26.1C70.2,-13.8,73,0.8,70,14.8C67,28.7,58.2,41.9,46,47.3C33.7,52.7,16.8,50.2,1.8,47.7C-13.3,45.3,-26.7,42.9,-36.9,35.2C-47.2,27.5,-54.2,14.5,-57.8,-1.4C-61.4,-17.3,-61.6,-34.7,-52.7,-42.9C-43.8,-51.1,-25.9,-50.1,-10.5,-55.2C4.9,-60.2,22.8,-71.8,37.5,-55.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Hero Content */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-red-600">
          Kayla Catering
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-700 leading-relaxed max-w-3xl">
          Kayla Catering adalah <strong>Professional Catering Event</strong> dan
          <strong> Pernikahan</strong> yang berdiri sejak 2007. Dengan
          pengalaman
          <strong> 18 tahun </strong>di bisnis jasa boga. Dengan dukungan tenaga{" "}
          <strong>Profesional</strong> , mutu produk yang bersertifikat{" "}
          <strong>Halal BPJPH (Kemenag) dan SLHS</strong>, cita rasa dan
          pelayanan prima serta pelayanan yang sesuai dengan standar protokol
          kesehatan.
        </p>

        {/* Tombol CTA */}
        <div className="mt-8 flex space-x-6">
          {/* Tombol Hubungi Kami */}
          <a
            onClick={scrollToContact}
            className="liquid-button relative inline-block px-5 py-4 text-lg font-mono text-white transition-transform duration-300 transform bg-red-500 rounded-full shadow-md overflow-hidden border-2 border-red-400"
          >
            Hubungi Kami
            <span className="liquid absolute inset-0"></span>
          </a>

          {/* Tombol Lihat Menu */}
          <a
            onClick={scrollToMenu}
            className="liquid-button relative inline-block px-5 py-4 text-lg font-mono text-white transition-transform duration-300 transform bg-amber-500 rounded-full shadow-md overflow-hidden border-2 border-amber-400"
          >
            Lihat Menu
            <span className="liquid absolute inset-0"></span>
          </a>
        </div>
      </div>

      {/* CSS Animasi */}
      <style>
        {`
          /* Animasi Floating */
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .animate-float {
            animation: float 6s infinite ease-in-out;
          }

          /* Liquid Button */
          .liquid-button {
            position: relative;
            overflow: hidden;
            transition: all 0.5s ease-in-out;
          }

          .liquid-button:hover {
            transform: scale(1.1);
            box-shadow: 0px 0px 15px rgba(255, 0, 0, 0.8);
          }

          .liquid-button:nth-child(2):hover {
            box-shadow: 0px 0px 15px rgba(0, 255, 0, 0.8);
          }

          .liquid {
            position: absolute;
            width: 200%;
            height: 200%;
            top: -100%;
            left: -50%;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 10%, rgba(255,255,255,0) 50%);
            transform: translateY(0);
            transition: transform 0.6s ease-out;
          }

          .liquid-button:hover .liquid {
            transform: translateY(100%);
          }
        `}
      </style>
      {/* End Hero Section */}

      {/* About */}
      <section>
        <Services />
      </section>
      {/* End About */}

      {/* Menu Section */}
      <section ref={menuRef}>
        <Menus />
      </section>
      {/* End Menu Section */}
      {/* Testimonials */}
      <section>
        <Testimonials />
      </section>
      {/* Contact */}
      <section ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
