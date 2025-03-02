import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg border-b border-gray-200/50 ${
        scrolling ? "bg-white/80 shadow-md" : "bg-white/90"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <nav className="flex items-center justify-between px-6 py-3 lg:px-16 lg:py-2">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center lg:ml-20"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="/images/logokayla.png"
            alt="Kayla Catering Logo"
            className="h-12 lg:h-16"
          />
        </motion.a>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-900 hover:text-red-500 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <motion.a
          href="https://www.mbizmarket.co.id/p/kayla-catering-cake-snack-bakery-p1X1/catalog"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center border-2 border-red-500 text-red-500 bg-white px-6 py-2 rounded-lg text-sm font-semibold transition hover:bg-red-500 hover:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/images/mbiz.svg" alt="MbizLogo" className="h-6 w-6 mr-2" />
          Lihat Katalog MbizMarket
        </motion.a>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            className="lg:hidden"
          >
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <DialogPanel
              as={motion.div}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-lg"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
            >
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
                  className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 space-y-3">
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
