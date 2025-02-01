import React from 'react';
import Link from 'next/link';

const navigationLinks = [
  { label: "Inicio" },
  { label: "CXP Academia" },
  { label: "Opera" },
  { label: "CXP Blog" },
  { label: "Precios" },
  { label: "Hype" },
];

const NavigationLinks = () => {
  return (
    <>
      {navigationLinks.map(({ label }) => (
        <Link
          key={label}
          href="/#"
          className="text-2xl text-white hover:text-[#EABC4D]"
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default NavigationLinks;
