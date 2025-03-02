import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/product"; // Data produk

const getRandomSize = () => {
  const sizes = [
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1", // Tidak terlalu vertikal
    "col-span-1 row-span-1",
  ];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

const Gallery = () => {
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    // Mengacak urutan gambar
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    setShuffledProducts(shuffled);
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold font-poppins text-red-600 sm:text-5xl mb-12">
          ✨ Galeri Menu Kami ✨
        </h2>

        {/* Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {shuffledProducts.map((product) => (
            <motion.div
              key={product.id}
              className={`relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${getRandomSize()}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Gambar */}
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />

              {/* Overlay dengan Nama Menu */}
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-xl font-semibold font-roboto px-4 py-2  uppercase">
                  {product.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
