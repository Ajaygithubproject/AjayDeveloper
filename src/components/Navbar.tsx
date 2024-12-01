import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-white shadow-md border-b border-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            AK
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 group relative"
              >
                {/* Menu item text */}
                <span className="group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                  {item}
                </span>

                {/* Underline with gradient, expands from left to right */}
                <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-0 group-hover:w-full transition-all duration-500"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-3 text-gray-700 group relative"
                onClick={() => setIsOpen(false)}
              >
                {/* Mobile text with gradient effect on hover */}
                <span className="group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                  {item}
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
