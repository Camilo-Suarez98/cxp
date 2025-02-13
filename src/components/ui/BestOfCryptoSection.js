import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BestOfCryptoSection = () => {
  return (
    <div className="bg-banner bg-[#1b1b1b] bg-cover bg-center flex flex-col justify-center pt-20 lg:flex-row lg:p-24 lg:pb-0">
      <div className="m-auto lg:pt-4 lg:pb-24">
        <div className="max-w-2xl mx-4 lg:m-0">
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

            <h1 className="text-3xl font-black text-white mb-6 p-4 sm:text-5xl xl:text-6xl 2xl:text-7xl">
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

      <div className='relative group flex justify-center items-end'>
        <Image
          src="/man-with-phone.png"
          width={500}
          height={700}
          className='relative lg:h-[700px]'
          alt="Man with a phone in his hands"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="155"
          height="155"
          viewBox="0 0 155 155"
          fill="none"
          className="absolute top-[45%] left-[10%] lg:top-[43%] lg:-left-[10%] opacity-100 group-hover:opacity-0 transition-opacity duration-300"
        >
          <circle cx="77.3417" cy="77.5097" r="15" fill="#EEBA00" />
          <circle className="pulse-ring" cx="77.3417" cy="77.5097" r="30" stroke="#EEBA00" strokeWidth="8" />
        </svg>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="117"
            height="120"
            viewBox="0 0 117 120"
            fill="none"
            className="absolute left-12 top-11 bg-[#EEBA00] p-3 rounded-lg lg:-left-6"
          >
            <path d="M90.6762 28.125L105.184 50.625L58.0327 103.125L10.8811 50.625L25.3893 28.125H90.6762Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.7623 50.625H96.1168" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32.6434 37.5L41.7111 50.625L58.0328 33.75L74.3545 50.625L83.4221 37.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M62.1133 90L74.3546 50.625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M41.7111 50.625L53.9524 90" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M85.2357 5.625V7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M90.6762 11.25H88.8627" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M85.2357 16.875V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M79.795 11.25H81.6086" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M29.0164 93.3L27.7288 94.6125" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M29.0164 101.25L27.7288 99.9187" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.327 101.25L22.5965 99.9187" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.327 93.3L22.5965 94.6125" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33.5502 18.75C34.051 18.75 34.457 18.3303 34.457 17.8125C34.457 17.2947 34.051 16.875 33.5502 16.875C33.0494 16.875 32.6434 17.2947 32.6434 17.8125C32.6434 18.3303 33.0494 18.75 33.5502 18.75Z" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26.2962 13.125C26.797 13.125 27.2029 12.7053 27.2029 12.1875C27.2029 11.6697 26.797 11.25 26.2962 11.25C25.7954 11.25 25.3894 11.6697 25.3894 12.1875C25.3894 12.7053 25.7954 13.125 26.2962 13.125Z" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38.9907 9.375C39.4915 9.375 39.8975 8.95527 39.8975 8.4375C39.8975 7.91973 39.4915 7.5 38.9907 7.5C38.49 7.5 38.084 7.91973 38.084 8.4375C38.084 8.95527 38.49 9.375 38.9907 9.375Z" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M90.6763 82.5V84.375" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M93.8137 88.125L92.254 87.1875" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M87.5388 88.125L89.0985 87.1875" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="117"
            height="120"
            viewBox="0 0 117 120"
            fill="none"
            className="absolute left-8 top-[32rem] bg-[#EEBA00] p-3 rounded-lg lg:left-16"
          >
            <g clipPath="url(#clip0_1_702)">
              <path d="M96.1168 106.875H106.998L106.998 41.25H96.1168V106.875Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M74.3546 106.875H85.2357V61.875H74.3546V106.875Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M52.5922 106.875H63.4734L63.4734 75H52.5922V106.875Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30.8299 106.875H41.7111V82.5H30.8299L30.8299 106.875Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.06758 106.875H19.9487L19.9487 86.25H9.06758L9.06758 106.875Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.2982 73.5937C47.1516 78.75 90.6762 54.375 94.3033 22.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M87.0492 22.4625L101.557 22.5375L94.3396 13.125L87.0492 22.4625Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1_702">
                <rect width="116.066" height="120" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="127"
            height="120"
            viewBox="0 0 80 81"
            fill="none"
            className="absolute top-28 right-10 bg-[#EEBA00] p-3 rounded-lg lg:right-0"
          >
            <path d="M33.3333 33.8333C33.3333 33.8333 30 28.8333 23.3333 27.1667M46.6667 33.8333C46.6667 33.8333 50 28.8333 56.6667 27.1667M33.3333 50.5C33.3333 50.5 30 45.5 23.3333 43.8333M46.6667 50.5C46.6667 50.5 48.3333 48.8333 51.6667 47.1667M40 18.3133C40 18.3133 47.5 13.04 55 11.28C62.5 9.52334 70 11.28 70 11.28V60.1367C70 60.1367 62.5 58.3767 55 60.1367C47.5 61.8933 40 67.1667 40 67.1667C40 67.1667 32.5 61.8933 25 60.1367C17.5 58.3767 10 60.1367 10 60.1367V11.28C10 11.28 17.5 9.52334 25 11.28C32.5 13.04 40 18.3133 40 18.3133Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BestOfCryptoSection;
