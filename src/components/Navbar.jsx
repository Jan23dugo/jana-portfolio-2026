import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-red py-6 px-8 md:px-16 shadow-md sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center">
        
        {/* Brand Logo */}
        <a
          href="/"
          className="font-script text-pastel-grey text-4xl hover:text-brand-white transition-colors"
        >
          Jana Virtuales
        </a>

        {/* Desktop Nav Links - hidden on mobile */}
        <ul className="hidden md:flex gap-6 md:gap-8 font-sans text-pastel-grey uppercase text-xs md:text-sm tracking-[0.15em]">
          {["home", "about", "services", "projects", "tools", "contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="hover:text-brand-white transition-colors"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button - only on mobile */}
        <button
          className="flex md:hidden text-pastel-grey hover:text-brand-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden font-sans text-pastel-grey uppercase text-xs tracking-[0.15em]">
          {["home", "about", "services", "projects", "tools", "contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="hover:text-brand-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;