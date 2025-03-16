"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-lg transition-transform hover:scale-105">
            SkodeLabs
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex bg-white/10 backdrop-blur-md p-2 rounded-lg">
            <ul className="flex space-x-6 text-lg">
              {["About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative px-4 py-2 font-medium transition-all duration-300 text-white hover:text-yellow-300 focus:text-yellow-300 
                    before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-yellow-300 before:transition-all before:duration-300 
                    hover:before:w-full hover:before:left-0 focus:before:w-full focus:before:left-0"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden mr-6 block focus:outline-none transition-transform transform hover:scale-110 active:scale-95"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Semi-transparent Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-md z-[100]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Drawer Menu */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                className="fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-gradient-to-b from-blue-800 to-blue-900 backdrop-blur-lg text-white shadow-xl z-[150] p-6"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="transition-transform transform hover:scale-110 active:scale-95"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>

                <nav className="mt-8">
                  <ul className="flex flex-col space-y-6 text-lg">
                    {["About", "Services", "Contact"].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="block px-6 py-3 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:pl-8 hover:scale-105 focus:bg-blue-500 active:scale-95"
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Scroll-To-Top Button */}
      <AnimatePresence>
        {showScrollUp && (
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-[999] transition-transform transform hover:scale-110 active:scale-95"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
