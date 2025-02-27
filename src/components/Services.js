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
    <section className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Bagian Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-semibold text-red-600 font-poppins text-4xl">
            Kayla Catering
          </h2>
          <p className="mt-3 text-4xl font-roboto font-bo text-gray-900 sm:text-2xl">
            Sajian Lezat untuk Momen Spesial Anda
          </p>
          <p className="mt-5 text-lg text-gray-700 text-justify">
            Berbekal pengalaman luas di industri kuliner berbintang, Kayla
            Catering hadir sebagai wujud dedikasi dalam menghadirkan hidangan
            berkualitas tinggi dengan cita rasa istimewa.
          </p>
          <p className="mt-3 text-lg text-gray-700 text-justify">
            Sejak didirikan pada tahun 2007, kami telah menjadi bagian dari
            berbagai momen istimewa, mulai dari pernikahan megah, acara
            korporat, gathering, hingga layanan santapan dalam bentuk
            lunch/dinner box dan bancakan syukuran.
          </p>
          <p className="mt-3 text-lg text-gray-700 text-justify">
            Kepercayaan dari berbagai kalangan, termasuk pejabat negara, tokoh
            publik, pengusaha, hingga selebriti nasional dan internasional,
            menjadi bukti komitmen kami dalam memberikan pelayanan terbaik.
            Kini, Kayla Catering terus berkembang dengan semangat baru, di mana
            generasi penerus turut serta dalam menjaga warisan cita rasa dan
            profesionalisme yang telah kami bangun.
          </p>
          <p className="mt-3 text-lg text-gray-700 text-justify">
            Dengan kualitas bahan terbaik, racikan bumbu autentik, serta
            pelayanan yang ramah dan profesional, Kayla Catering selalu berusaha
            menghadirkan pengalaman kuliner yang tak terlupakan untuk setiap
            pelanggan.
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
        <div className=" py-16 ">
          <h2 className="text-center text-3xl font-semibold font-poppins text-red-600">
            Sertifikasi Keamanan Pangan
          </h2>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-12 max-w-4xl">
            {/* Logo Halal */}
            <div className="text-center">
              <img
                alt="Logo Halal"
                src="/images/logohalal.png"
                className="h-60 w-auto object-contain transition-transform duration-300 hover:scale-110 "
              />
              <p className="mt-2 text-gray-700 text-md font-semibold">
                BPJPH No. ID34120000139510921
              </p>
            </div>

            {/* Logo SLHS */}
            <div className="text-center">
              <img
                alt="Logo SLHS"
                src="/images/logoslhs.png"
                className="h-60 w-auto object-contain transition-transform duration-300 hover:scale-110"
              />
              <p className="mt-2 text-gray-700 text-md font-semibold ">
                SLHS No. 022000780155700020001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
