import React from 'react';
import FeatureContainer from './FeatureContainer';

const learnCardsData = [
  { src: "/learn-1.png" },
  { src: "/learn-2.png" },
  { src: "/learn-3.png" },
  { src: "/learn-4.png" },
];

const LearnSection = () => {
  return (
    <div className='my-8 mx-4 lg:mx-24'>
      <div className='flex justify-between items-center gap-4 overflow-hidden lg:gap-0'>
        <div className='w-[15%] lg:w-28'>
          <svg xmlns="http://www.w3.org/2000/svg" width="117" height="120" viewBox="0 0 117 120" fill="none">
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
        </div>

        <div className='w-4/5 lg:w-3/5'>
          <h2 className='text-5xl font-black lg:text-[64px]'>
            <span className='text-[#EABC4D]'> Aprende y opera</span>{" "}
            con nuestros expertos
          </h2>
        </div>

        <div className='w-1/12 lg:w-1/3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="780" height="12" viewBox="0 0 780 12" fill="none">
            <path d="M0.699503 6C0.699503 8.94552 3.08732 11.3333 6.03284 11.3333C8.97836 11.3333 11.3662 8.94552 11.3662 6C11.3662 3.05448 8.97836 0.666667 6.03284 0.666667C3.08732 0.666666 0.699504 3.05448 0.699503 6ZM780 5.00007L6.03284 5L6.03284 7L780 7.00007L780 5.00007Z" fill="#EABC4D" />
          </svg>
        </div>
      </div>

      <div className='flex flex-col items-center gap-8 lg:flex-row'>
        {learnCardsData.map(({ src }) => (
          <FeatureContainer
            key={src}
            src={src}
          />
        ))}
      </div>
    </div>
  );
};

export default LearnSection;
