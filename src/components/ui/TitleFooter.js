import React from 'react';

const TitleFooter = ({ title }) => {
  return (
    <>
      <h3 className='text-[32px] font-bold text-[#E5A000]'>{title}</h3>
      <svg xmlns="http://www.w3.org/2000/svg" width="521" height="12" viewBox="0 0 521 12" fill="none" className='w-full'>
        <path d="M520.333 5.8252C520.333 2.87968 517.946 0.491862 515 0.491862C512.054 0.491862 509.667 2.87968 509.667 5.8252C509.667 8.77071 512.054 11.1585 515 11.1585C517.946 11.1585 520.333 8.77071 520.333 5.8252ZM-1.5974e-05 6.8252H515V4.8252H-1.5974e-05V6.8252Z" fill="#EEBA00" />
      </svg>
    </>
  );
};

export default TitleFooter;
