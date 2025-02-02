import React from 'react';
import Link from 'next/link';

import LogoFooterAndSocials from './LogoFooterAndSocials';
import TitleFooter from './TitleFooter';

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col gap-8 bg-[#5B5B5C] py-8 px-4 lg:px-24 lg:flex-row'>
        <LogoFooterAndSocials />
        <div className='flex flex-col justify-center items-center gap-3 my-8 lg:max-w-72'>
          <input
            type='email'
            placeholder='Correo'
            className='max-w-80 py-2 px-3 rounded-lg border-[1px] border-[#EFEBE7] text-[#474747] text-[32px] placeholder:text-[#474747] lg:w-full'
          />
          <Link
            href="/#"
            className='w-80 bg-[#FFB000] py-[6px] px-4 text-[32px] text-center font-bold rounded-lg lg:w-full'
          >
            Suscribete
          </Link>
        </div>
        <div className='flex items-center gap-16'>
          <div className='flex flex-col lg:gap-8 lg:flex-row'>
            <div className='lg:max-w-72'>
              <TitleFooter title="About us" />
              <p className='leading-normal max-w-72'>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
            <div className='lg:max-w-72'>
              <TitleFooter title="Services" />
              <p className='text-xl leading-6 max-w-72'>
                CXP AI
                <br />
                CXP Academy
                <br />
                Trading room
              </p>
            </div>
            <div className='lg:max-w-64'>
              <TitleFooter title="CXP Blog" />
              <p className='text-xl leading-6 max-w-72'>
                Guides
                <br />
                Trading Inside
                <br />
                E-books
                <br />
                Courses
              </p>
            </div>
          </div>
          <div>
            <div>
              <Link
                href="#top"
                className='flex justify-center items-center bg-[#E5A000] rounded-[5px] h-[89px] w-[89px]'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="37" viewBox="0 0 63 37" fill="none">
                  <path d="M3 33.9033L31.5 2.90332L60 33.9033" stroke="#EFEBE7" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='py-[30px] px-9 text-[#474747] bg-[#E5A000]'>
        <p className='font-light'>DESIGNED BY CXP CORP 2025 /ALL RIGTHS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
