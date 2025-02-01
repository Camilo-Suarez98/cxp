"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#474747] shadow-md fixed top-0 left-0 z-50">
      <div className="mx-auto px-6 py-4 flex justify-evenly items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 flex">
          <Image
            src="/logo.png"
            width={296}
            height={50}
            alt="CXP Logo"
            priority
          />
        </Link>

        <nav className="hidden lg:flex gap-6 items-center">
          <Link href="/" className="text-2xl hover:text-[#EABC4D]">Inicio</Link>
          <Link href="/#" className="text-2xl hover:text-[#EABC4D]">CXP Academia</Link>
          <Link href="/#" className="text-2xl hover:text-[#EABC4D]">Opera</Link>
          <Link href="/#" className="text-2xl hover:text-[#EABC4D]">CXP Blog</Link>
          <Link href="/#" className="text-2xl hover:text-[#EABC4D]">Precios</Link>
          <Link href="/#" className="text-2xl hover:text-[#EABC4D]">Hype</Link>
          <Link href="/#" className="bg-[#EABC4D] text-white px-4 py-2 font-bold rounded-lg">Registrate</Link>
          <Link href="/#" className="bg-white text-black px-4 py-2 font-bold rounded-lg">Inicia sesión</Link>
        </nav>

        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      <div
        className={`absolute top-16 left-0 w-full bg-[#474747] shadow-md transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center flex-wrap gap-4 py-6">
          <Link href="/" className="text-2xl hover:text-[#EABC4D]" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="/#" className="text-2xl hover:text-[#EABC4D]" onClick={() => setIsOpen(false)}>CXP Academia</Link>
          <Link href="/#" className="text-2xl hover:text-[#EABC4D]" onClick={() => setIsOpen(false)}>Opera</Link>
          <Link href="/#" className="text-2xl hover:text-[#EABC4D]" onClick={() => setIsOpen(false)}>CXP Blog</Link>
          <Link href="/#" className="text-2xl hover:text-[#EABC4D]" onClick={() => setIsOpen(false)}>Precios</Link>
          <Link href="/#" className="text-2xl hover:text-[#EABC4D]" onClick={() => setIsOpen(false)}>Hype</Link>
          <Link href="/#" className="bg-[#EABC4D] text-white px-4 py-2 font-bold rounded-lg">Registrate</Link>
          <Link href="/#" className="bg-white text-black px-4 py-2 font-bold rounded-lg">Inicia sesión</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
