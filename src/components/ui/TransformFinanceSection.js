import React from 'react';
import Link from 'next/link';

const TransformFinanceSection = () => {
  return (
    <div className='bg-finance bg-no-repeat bg-cover my-8 mx-4 rounded-2xl border-[1px] border-[#EFEBE7] lg:mx-24'>
      <div className="container mx-auto pt-6 px-8 pb-[30rem] lg:pt-16 lg:pl-24 lg:pb-[36rem]">
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

            <h2 className="text-4xl font-black text-white mb-6 p-4 lg:text-5xl">
              Transforma tus finanzas con la {" "}
              <span className='text-[#EABC4D]'>economía del futuro</span>
            </h2>
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
        </div>
      </div>
    </div>
  );
};

export default TransformFinanceSection;
