import { useState } from "react";
import { navLinks } from "../data/navData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="./logo.svg" 
            alt="Business Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-bold text-blue-600">
            AAA BIM Engineering SERVICE
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Quote
          </button>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;
