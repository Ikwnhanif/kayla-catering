import React from "react";
import { products } from "../data/product";
import { features } from "../data/services";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Button } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/30">
              Menyediakan layanan catering terbaik untuk setiap acara.{" "}
              {/* <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Pelajari lebih lanjut <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold font-poppins tracking-tight text-gray-900 sm:text-6xl">
              Catering Berkualitas untuk Setiap Acara
            </h1>
            <p className="mt-8 text-lg font-thin font-poppins text-gray-500 sm:text-xl">
              Kami menyediakan berbagai pilihan menu yang lezat dan layanan
              profesional untuk memastikan acara Anda berjalan lancar. Dari
              pernikahan hingga acara perusahaan, kami siap memenuhi kebutuhan
              catering Anda.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Pesan Sekarang
              </a>
              <a
                href="/gallery"
                className="text-sm font-semibold text-gray-900"
              >
                Lihat Menu <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      {/* ---------------end section----------- */}
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <h2 className="text-center text-4xl font-poppins font-semibold  text-gray-900 sm:text-5xl lg:text-balance mb-10">
          Tentang Kami
        </h2>
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
                  Kami menyediakan layanan catering yang disesuaikan untuk
                  berbagai acara, mulai dari pernikahan hingga acara perusahaan.
                  Dengan menu yang beragam dan layanan profesional, kami siap
                  memenuhi kebutuhan Anda.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt="Catering Service"
              src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                <p>
                  Kami percaya bahwa setiap acara harus diisi dengan makanan
                  yang lezat dan pengalaman yang tak terlupakan. Tim kami
                  berkomitmen untuk memberikan layanan terbaik dan memastikan
                  setiap detail diperhatikan.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-indigo-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Menu yang Disesuaikan.
                      </strong>{" "}
                      Kami menawarkan berbagai pilihan menu yang dapat
                      disesuaikan dengan kebutuhan dan preferensi Anda.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-indigo-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Layanan Profesional.
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
                        Pengalaman yang Tak Terlupakan.
                      </strong>{" "}
                      Kami berkomitmen untuk memberikan pengalaman catering yang
                      luar biasa untuk setiap acara.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Dengan berbagai pilihan hidangan yang lezat dan layanan yang
                  ramah, kami siap membantu Anda menciptakan momen yang
                  berkesan.
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
            <h2 className="text-center text-md sm:text-2xl  font-semibold text-gray-900">
              Akreditasi dan Sertifikasi
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                alt="Transistor"
                src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <img
                alt="Reform"
                src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <img
                alt="Tuple"
                src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <img
                alt="SavvyCal"
                src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              />
              <img
                alt="Statamic"
                src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ---------------end section----------- */}
      <div className="bg-white">
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>{" "}
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-semibold font-poppins text-indigo-600 text-xl">
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
      {/* ---------------end section----------- */}

      <div className="bg-white ">
        {/* <h2 className="text-5xl font-medium font-poppins tracking-tight text-gray-900 sm:text-7xl text-center">
          Our Menu
        </h2> */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.slice(0, 8).map(
              (
                product // membatasi jumlah item Home
              ) => (
                <a key={product.id} href={product.href} className="group">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-90 xl:aspect-[7/8] transform"
                  />
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                </a>
              )
            )}
          </div>
        </div>
      </div>
      {/* ---------------end section----------- */}
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            alt=""
            src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
            className="mx-auto h-12"
          />
          <figure className="mt-10">
            <blockquote className="text-center text-3xl font-semibold text-gray-900 ">
              <h1>“Got questions? Please Contact us!.”</h1>
            </blockquote>
            <figcaption className="mt-10 ">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Yourname</div>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">CEO of Workcation</div>
              </div>
              <div className="flex justify-center mt-4">
                <Button color="light" size="xl">
                  <FaWhatsapp
                    className="flex items-center mr-1"
                    size={24}
                  ></FaWhatsapp>
                  WhatsApp
                </Button>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      {/* ---------------end section----------- */}
    </div>
  );
};

export default Home;
