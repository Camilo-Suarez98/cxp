"use client";
import Image from 'next/image';
import React from 'react';

const CryptoTicket = ({
  imageName = "",
  cryptoName,
  value,
  percentage
}) => {
  return (
    <div className='flex justify-center items-center m-3 p-3 border-r-[1px] gap-8 border-white'>
      <div className='flex justify-center items-center'>
        <Image
          src={imageName}
          width={40}
          height={40}
          alt='Crypto logo'
        />
        <h2 className='text-5xl font-bold tracking-tighter'>{cryptoName}</h2>
      </div>
      <div className='flex flex-col items-start'>
        <p className='text-xl leading-5 font-bold'>{value}</p>
        <p
          className='text-xl leading-5 font-bold'
          style={{ color: percentage.includes('+') ? "#54EA41" : "#FF0000" }}
        >
          {percentage}
        </p>
      </div>
      <div className='h-12 flex items-end mb-3'>
        {percentage.includes("+") ?
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none">
            <path d="M18 12.5H1.33331L9.66665 0.5L18 12.5Z" fill="#54EA41" stroke="#54EA41" strokeLinejoin="round" />
          </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none">
            <path d="M1.33334 0.5L18 0.500002L9.66667 12.5L1.33334 0.5Z" fill="#FF0000" stroke="#FF0000" strokeLinejoin="round" />
          </svg>
        }
      </div>
    </div>
  );
};

export default CryptoTicket;
