import React from "react";
import {
  CakeIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Menu yang Disesuaikan",
    description:
      "Kami menawarkan berbagai pilihan menu yang dapat disesuaikan dengan kebutuhan dan preferensi Anda, mulai dari hidangan pembuka hingga pencuci mulut.",
    icon: CakeIcon,
  },
  {
    name: "Layanan Profesional",
    description:
      "Tim kami terdiri dari profesional berpengalaman yang siap membantu Anda dalam setiap langkah, memastikan acara Anda berjalan lancar.",
    icon: UserGroupIcon,
  },
  {
    name: "Pengiriman Tepat Waktu",
    description:
      "Kami menjamin pengiriman makanan tepat waktu ke lokasi acara Anda, sehingga Anda dapat fokus pada hal-hal penting lainnya.",
    icon: TruckIcon,
  },
  {
    name: "Kualitas Terjamin",
    description:
      "Kami menggunakan bahan-bahan berkualitas tinggi dan segar untuk memastikan setiap hidangan yang kami sajikan lezat dan memuaskan.",
    icon: ClipboardDocumentCheckIcon,
  },
];

const Services = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Layanan Catering Terbaik
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Semua yang Anda Butuhkan untuk Acara Anda
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Kami menyediakan layanan catering yang disesuaikan untuk berbagai
            acara, mulai dari pernikahan hingga acara perusahaan. Dengan menu
            yang beragam dan layanan profesional, kami siap memenuhi kebutuhan
            Anda.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;
