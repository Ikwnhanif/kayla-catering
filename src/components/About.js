import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
// import logohalal from "../assets/images/logohal.png";

const About = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">
                Catering Berkualitas
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Layanan Catering Terbaik untuk Setiap Acara
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Kayla Catering merupakan Professional Catering Event dan
                Pernikahan yang sudah berdiri sejak tahun 2007.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Catering Service"
            src="/images/isian1.jpg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                Memiliki pengalaman 18 tahun di bisnis jasa boga dengan dukungan
                tenaga profesional, mutu produk yang bersertifikat Halal BPJPH
                (Kemenag) dan SLHS, cita rasa dan pelayanan prima serta
                pelayanan yang sesuai dengan standar protokol kesehatan.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Berpengalaman di bisnis jasa boga selama 18 tahun
                    </strong>{" "}
                    Menyediakan berbagai pilihan menu yang dapat disesuaikan
                    dengan kebutuhan dan preferensi Anda.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Harga terjangkau
                    </strong>{" "}
                    Tim kami terdiri dari profesional berpengalaman yang siap
                    membantu Anda dalam setiap langkah.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Bersertifikat 100% Halal BPJPH (No. ID34120000139510921)
                    </strong>{" "}
                    100% terjamin kehalalannya.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Bersertifikat Laik Higiene Sanitasi (No.
                      022000780155700020001)
                    </strong>{" "}
                    Standar kebersihan dan keamanan pangan yang terjaga.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Cita rasa dijamin prima
                    </strong>{" "}
                    Menghadirkan hidangan lezat dengan kualitas terbaik.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Pelayanan selalu siap & tanggap
                    </strong>{" "}
                    Kami siap melayani dengan sigap dan profesional.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Trendy crew handal & kekinian
                    </strong>{" "}
                    Crew yang trendy dan berpengalaman dalam menangani berbagai
                    jenis acara.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Kemasan eksklusif
                    </strong>{" "}
                    Penyajian yang elegan dan menarik untuk setiap pesanan.
                    Dengan komitmen kami untuk memberikan pengalaman catering
                    yang luar biasa, Kayla Catering siap menjadi bagian dari
                    momen istimewa Anda.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Dengan berbagai pilihan hidangan yang lezat dan layanan yang
                ramah, kami siap membantu Anda menciptakan momen yang berkesan.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Mengapa Memilih Kami?
              </h2>
              <p className="mt-6">
                Kami memahami pentingnya setiap acara dan berusaha untuk
                memberikan yang terbaik. Dengan pengalaman bertahun-tahun di
                industri catering, kami siap memenuhi semua kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-gray-900">
            Akreditasi dan Sertifikasi Keamanan Pangan
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-5 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <img
              alt="Logohalal"
              src="/images/logohalal.png"
              className="col-span-2 max-h-60  w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src="/images/logoslhs.png"
              className="col-span-2 max-h-60 w-full object-contain lg:col-span-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
