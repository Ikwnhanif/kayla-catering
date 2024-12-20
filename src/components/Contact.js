import React from "react";

const Contact = () => {
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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Contact Us
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          If you have any questions, feel free to reach out to us!
        </p>

        <div className="mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Get in Touch
            </h3>
            <p className="mt-4 text-gray-600">
              We would love to hear from you! Here’s how you can reach us:
            </p>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800">Phone:</h4>
              <p className="text-gray-600">
                +62 821-3440-6948 / +62 813-9378-8688
              </p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800">Email:</h4>
              <p className="text-gray-600">information@kaylacatering.id</p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800">Address:</h4>
              <p className="text-gray-600">
                Jl. Parangtritis Km. 13, Bakulan, Patalan, Jetis, Bantul,
                Yogyakarta 55781
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Send Us a Message
            </h3>
            <form className="mt-4">
              <div className="grid grid-cols-1 gap-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 font-sans text-center">
            Our Location
          </h3>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.8592654541058!2d110.34988707588928!3d-7.909766992113471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5597861e9ea3%3A0x183d4af52669054b!2sKayla%20Catering%2C%20Cake%2C%20Snack%20%26%20Bakery!5e0!3m2!1sid!2sid!4v1734695941050!5m2!1sid!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
