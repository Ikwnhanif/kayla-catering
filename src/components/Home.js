import React, { useRef, useEffect } from "react";
import { products } from "../data/product";
import { Button } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // ScrollTrigger Animation
    [productsRef, contactRef].forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white overflow-hidden">
        {/* Blob Background */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <svg
            className="w-[800px] h-[800px] opacity-20 animate-float"
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
          <strong> 18 tahun</strong>, kami menghadirkan cita rasa terbaik,
          layanan berkualitas, dan standar kebersihan tinggi.
        </p>
        <div className="mt-8">
          <a
            href="#kontak"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            Hubungi Kami
          </a>
        </div>
      </div>

      <style>
        {`
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(20px) rotate(5deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  .animate-float {
    animation: float 6s infinite ease-in-out;
  }
`}
      </style>

      {/* Product Section */}
      <div ref={productsRef} className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold">Menu Kami</h2>
          <p className="mt-4 text-lg text-gray-600">
            Pilih hidangan terbaik untuk acara Anda.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="group block overflow-hidden rounded-lg shadow-md bg-white"
              >
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <h3 className="mt-4 text-xl font-medium">{product.name}</h3>
                <p className="text-lg font-semibold text-indigo-600">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section */}
    </div>
  );
};

export default Home;
