import React from 'react';
import FeatureContainer from './FeatureContainer';

const featureCardsDataMobile = [
  { src: "/features-1.png" },
  { src: "/features-2.png" },
  { src: "/features-3.png" },
  { src: "/features-4.png" },
];

const FeaturesSection = () => {
  return (
    <div className='my-8 mx-4 lg:mx-24'>
      <div className='flex justify-between items-center gap-4 overflow-hidden lg:gap-0'>
        <div className='w-2/12 lg:w-28'>
          <svg xmlns="http://www.w3.org/2000/svg" width="117" height="120" viewBox="0 0 117 120" fill="none" className='w-full'>
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
        </div>

        <div className='w-4/5 lg:w-3/5'>
          <h2 className='text-2xl font-black lg:text-[64px]'>
            Aprender a {" "}
            <span className='text-[#EABC4D]'>operar cryptos</span> {" "}
            nunca había sido tan fácil
          </h2>
        </div>

        <div className='w-1/12 lg:w-1/3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="780" height="12" viewBox="0 0 780 12" fill="none">
            <path d="M0.699503 6C0.699503 8.94552 3.08732 11.3333 6.03284 11.3333C8.97836 11.3333 11.3662 8.94552 11.3662 6C11.3662 3.05448 8.97836 0.666667 6.03284 0.666667C3.08732 0.666666 0.699504 3.05448 0.699503 6ZM780 5.00007L6.03284 5L6.03284 7L780 7.00007L780 5.00007Z" fill="#EABC4D" />
          </svg>
        </div>
      </div>

      <div className='flex flex-col items-center gap-8 lg:flex-row'>
        {featureCardsDataMobile.map(({ src }) => (
          <FeatureContainer
            key={src}
            src={src}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
