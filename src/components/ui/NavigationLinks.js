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
          className="text-2xl text-white hover:text-[#EABC4D] lg:text-base xl:text-xl 2xl:text-2xl"
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default NavigationLinks;
