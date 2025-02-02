import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeatureSection = () => {
  return (
    <div className='flex flex-col items-end rounded-2xl border-2 border-[#EFEBE7] my-8 mx-4 lg:flex-row lg:items-start lg:justify-between lg:mx-24'>
      <div className='w-full lg:w-1/2'>
        <Image
          src="/women-with-carousel.png"
          width={668}
          height={770}
          className='w-full h-[810px]'
          alt="Woman and a bitcoin carousel"
        />
      </div>
      <div className='px-24 pt-12 pb-20 w-full lg:px-10 lg:w-1/2'>
        <div className='flex items-start gap-x-4'>
          <div className='w-20'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path d="M33.3333 33.3333C33.3333 33.3333 30 28.3333 23.3333 26.6667M46.6667 33.3333C46.6667 33.3333 50 28.3333 56.6667 26.6667M33.3333 50C33.3333 50 30 45 23.3333 43.3333M46.6667 50C46.6667 50 48.3333 48.3333 51.6667 46.6667M40 17.8133C40 17.8133 47.5 12.54 55 10.78C62.5 9.02334 70 10.78 70 10.78V59.6367C70 59.6367 62.5 57.8767 55 59.6367C47.5 61.3933 40 66.6667 40 66.6667C40 66.6667 32.5 61.3933 25 59.6367C17.5 57.8767 10 59.6367 10 59.6367V10.78C10 10.78 17.5 9.02334 25 10.78C32.5 12.54 40 17.8133 40 17.8133Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className='text-5xl font-bold'>
            Prepárate para el ciclo más grande de {" "}
            <span className='text-[#EABC4D]'>la historia de las cryptos.</span>
          </h2>
        </div>

        <div className='my-12'>
          <p className='text-[32px] leading-normal'>
            Nuestro equipo ha transformado más de 10 años de experiencia
            en una rápida y sencilla curva de aprendizaje, estamos
            definitivamente en el mejor momento para el mercado Crypto
            y en CXP te traemos todo lo necesario para que tú también puedas
            ser parte de esto.
          </p>
        </div>

        <div className='flex justify-end'>
          <Link
            href='/#'
            className='border-[1px] border-[#EABC4D] text-[#EABC4D] text-4xl font-bold py-2 px-4 rounded-lg'
          >
            Empieza Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
