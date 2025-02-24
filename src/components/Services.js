import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { features } from "../data/services";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      servicesRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 85%",
          end: "bottom 50%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Bagian Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-semibold text-red-600 text-xl">
            Layanan Catering Premium
          </h2>
          <p className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
            Sajian Lezat untuk Momen Spesial Anda
          </p>
          <p className="mt-5 text-lg text-gray-700">
            Kami menghadirkan layanan catering berkualitas tinggi untuk berbagai
            acara, mulai dari pernikahan, ulang tahun, hingga acara perusahaan.
            Nikmati hidangan lezat dengan cita rasa terbaik dan layanan
            profesional yang siap memenuhi setiap kebutuhan Anda.
          </p>
        </div>

        {/* Fitur Layanan */}
        <div className="mx-auto mt-16 max-w-4xl">
          <dl
            ref={servicesRef}
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2"
          >
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex items-start space-x-4 opacity-0 translate-y-10 transition-all duration-700 ease-out"
              >
                <div className="flex-shrink-0">
                  <div className="size-12 flex items-center justify-center rounded-xl bg-red-600 text-white transition-transform duration-300 hover:scale-110 shadow-md">
                    <feature.icon className="size-6" />
                  </div>
                </div>
                <div>
                  <dt className="text-lg font-semibold text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-gray-700">{feature.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Akreditasi dan Sertifikasi */}
        <div className="mt-20 py-16">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Akreditasi dan Sertifikasi Keamanan Pangan
          </h2>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-12 max-w-4xl">
            <img
              alt="Logo Halal"
              src="/images/logohalal.png"
              className="h-32 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
            <img
              alt="Logo SLHS"
              src="/images/logoslhs.png"
              className="h-32 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
