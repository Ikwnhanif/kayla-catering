import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white0 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-red-600 sm:text-3xl">
            Testimoni Pelanggan
          </h2>
          <h2 className="font-sans text-gray-500 ">(Based On Google Maps)</h2>
          <p className="mt-4 text-lg text-gray-600">
            Apa kata mereka yang telah menggunakan layanan Kayla Catering?
          </p>
        </div>

        {/* List of Testimonials */}
        <div className="mt-16">
          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            class="elfsight-app-82fed803-b337-4412-9cda-081f541b702d"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
