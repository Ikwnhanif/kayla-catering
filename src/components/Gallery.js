import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "../data/product";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const galleryItems = galleryRef.current.children;

    gsap.set(galleryItems, { opacity: 0, y: 50, scale: 0.9 });

    gsap.utils.toArray(galleryItems).forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%", // Saat elemen hampir masuk viewport
            end: "top 20%", // Saat elemen keluar viewport
            toggleActions: "play reverse play reverse", // Animasi balik saat elemen tidak terlihat
          },
        }
      );
    });
  }, []);

  return (
    <section className="pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold font-poppins text-red-600 sm:text-5xl mb-12">
          ✨ Galeri Menu Kami ✨
        </h2>

        {/* Grid Produk */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay Blur & Nama Menu */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white text-lg font-semibold bg-black/30 px-3 py-1 rounded-md backdrop-blur-md">
                  {product.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
