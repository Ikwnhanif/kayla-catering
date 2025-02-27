import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Produk", href: "/menus" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);

  // Efek Scroll untuk membuat Header menjadi pudar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 200, 0.85);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-opacity duration-500 backdrop-blur-md bg-white/80 border-b border-gray-200/30"
      style={{ opacity }}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-6 py-3 lg:px-16 lg:py-2"
      >
        {/* Logo (Digeser ke kanan dengan margin-left) */}
        <div className="flex lg:flex-1">
          <a href="/" className="lg:ml-20 p-1.5">
            {" "}
            {/* Tambah margin-left */}
            <img
              alt="Kayla Catering Logo"
              src="/images/logokayla.png"
              className="h-12 w-auto lg:h-16 transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold font-poppins text-gray-900 transition-colors duration-300 hover:text-pink-600"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a
            href="https://www.mbizmarket.co.id/p/kayla-catering-cake-snack-bakery-p1X1/catalog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border-2 border-red-500 text-red-500 bg-white px-6 py-2 rounded-lg text-lg font-semibold transition duration-300 hover:bg-red-500 hover:text-white"
          >
            <img
              src="/images/mbiz.svg"
              alt="MbizLogo"
              className="h-6 w-6 mr-2"
            />
            Mbiz Market
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="p-1.5">
              <img
                alt="Kayla Catering Logo"
                src="/images/logokayla.png"
                className="h-10 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-poppins font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-6 flex items-center">
            <DevicePhoneMobileIcon
              aria-hidden="true"
              className="size-6 text-gray-700"
            />
            <a
              href="#"
              className="block px-3 py-2 text-base font-poppins font-semibold text-gray-900 hover:bg-gray-50"
            >
              +62 821-3440-6948
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
