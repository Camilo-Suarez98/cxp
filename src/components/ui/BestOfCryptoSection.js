import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BestOfCryptoSection = () => {
  return (
    <div className="bg-banner bg-[#1b1b1b] bg-cover bg-center flex flex-col justify-center pt-20 lg:flex-row lg:p-24 lg:pb-0">
      <div className="container mx-auto lg:pt-4 lg:pb-24">
        <div className="max-w-2xl m-auto lg:m-0">
          <div className='relative'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="642"
              height="101"
              viewBox="0 0 642 101"
              fill="none"
              className='w-full absolute -top-4 right-0 left-0 md:-left-4'
            >
              <path d="M6 1V0H5V1H6ZM0.666667 95C0.666667 97.9455 3.05448 100.333 6 100.333C8.94552 100.333 11.3333 97.9455 11.3333 95C11.3333 92.0545 8.94552 89.6667 6 89.6667C3.05448 89.6667 0.666667 92.0545 0.666667 95ZM642 0H6V2H642V0ZM5 1V95H7V1H5Z" fill="#EABC4D" />
            </svg>

            <h1 className="text-5xl font-black text-white mb-6 p-4 lg:text-[70px]">
              Lo mejor de crypto en un solo lugar.
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="642"
              height="101"
              viewBox="0 0 642 101"
              fill="none"
              className='w-full absolute -bottom-4 left-0 right-0 md:-right-4'
            >
              <path d="M636 100L636 101L637 101L637 100L636 100ZM641.333 6.00006C641.333 3.05454 638.946 0.666726 636 0.666725C633.054 0.666725 630.667 3.05454 630.667 6.00006C630.667 8.94558 633.054 11.3334 636 11.3334C638.946 11.3334 641.333 8.94558 641.333 6.00006ZM-6.33979e-08 101L636 101L636 99.0001L6.33979e-08 99L-6.33979e-08 101ZM637 100L637 6.00006L635 6.00006L635 100L637 100Z" fill="#EABC4D" />
            </svg>
          </div>
          <p className="bg-[#4e4b4940] backdrop-blur-custom text-3xl text-gray-300 my-8 rounded-2xl p-4">
            En CXP, accede a un equipo de expertos, herramientas especializadas,
            formación en criptomonedas y una comunidad activa, todo lo que necesitas
            en un solo lugar.
          </p>
          <Link href="/#" className="bg-[#EABC4D] text-white px-4 py-2 rounded-md text-3xl font-bold float-right lg:text-4xl">
            Registrate
          </Link>
        </div>
      </div>

      <div className='flex justify-center items-end'>
        <Image
          src="/man-with-phone.png"
          width={500}
          height={700}
          alt="Man with a phone in his hands"
        />
      </div>
    </div>
  );
};

export default BestOfCryptoSection;
