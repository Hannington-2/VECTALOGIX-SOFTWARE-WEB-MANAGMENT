import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Helper for link styles
  const navLinkStyles = ({ isActive }) =>
    `group relative block py-3 px-6 text-lg font-medium whitespace-nowrap transition-colors duration-300 lg:py-2 lg:px-0 ${
      isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <>
      {/* 1. THE HEADER */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100" id="top">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Main-navigation"
        >
          {/* Logo and Company Name */}
          <NavLink 
            to="/" 
            className="flex items-center gap-3 group shrink-0 z-50" 
            aria-label="vectalogix home"
          >
            <img
              src="/images/vectalogix-icon.svg"
              alt="Vectalogix Logo"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-gray-900 leading-none group-hover:text-blue-600 transition-colors">
                VECTALOGIX
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 mt-1">
                SOFTWARE
              </span>
            </span>
          </NavLink>

          {/* Desktop Links (Hover effects restored here) */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            <li>
              <NavLink to="/" className={navLinkStyles}>
                <span>Home</span>
                <span className="absolute bottom-[-4px] left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkStyles}>
                <span>About</span>
                <span className="absolute bottom-[-4px] left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkStyles}>
                <span>Services</span>
                <span className="absolute bottom-[-4px] left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/knowledge" className={navLinkStyles}>
                <span>Knowledge Hub</span>
                <span className="absolute bottom-[-4px] left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkStyles}>
                <span>Contact</span>
                <span className="absolute bottom-[-4px] left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <NavLink 
              to="/contact" 
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="z-50 block text-2xl text-gray-800 hover:text-blue-600 lg:hidden focus:outline-none transition-colors"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={toggleMenu}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </header>

      {/* 2. MOBILE OVERLAY & DRAWER */}
      
      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Sliding Drawer */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-[100dvh] w-72 max-w-[85vw] bg-white shadow-2xl
          flex flex-col pt-24 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        <ul className="flex flex-col w-full">
          <li>
            <NavLink to="/" className={navLinkStyles} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkStyles} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkStyles} onClick={() => setIsOpen(false)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/knowledge" className={navLinkStyles} onClick={() => setIsOpen(false)}>
              Knowledge Hub
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkStyles} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile CTA Button */}
        <div className="px-6 mt-8">
          <NavLink 
            to="/contact" 
            className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors whitespace-nowrap"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;