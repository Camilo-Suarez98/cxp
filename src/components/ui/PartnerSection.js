import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const videoGallery = [
  {
    src: "/reproducer.png"
  },
  {
    src: "/reproducer-2.png"
  }
]

const PartnerSection = () => {
  return (
    <div className='flex flex-col my-8 mx-4 border-2 border-[#EFEBE7] rounded-2xl lg:mx-24 lg:flex-row'>
      <div className='relative overflow-hidden lg:w-1/2'>
        <Image
          src="/student.png"
          width={790}
          height={660}
          alt='Student with phone'
          className='relative z-50 -right-32 mt-8 lg:right-0 lg:-bottom-20'
        />
        <Image
          src="/render.png"
          width={450}
          height={570}
          alt='Render bitcoins logos'
          className='absolute top-0 right-0 z-10'
        />
        <div className='bg-[#00000040] backdrop-blur-lg flex flex-col justify-end items-start gap-6 absolute top-0 left-12 w-[483px] px-6 float-gallery'>
          {videoGallery.map(({ src }, index) => (
            <Image
              key={index}
              src={src}
              width={430}
              height={300}
              alt='Video'
            />
          ))}
          {videoGallery.map(({ src }, index) => (
            <Image
              key={index}
              src={src}
              width={430}
              height={300}
              alt='Video'
            />
          ))}
        </div>
      </div>
      <div className='pt-8 px-24 pb-[74px] lg:px-12 lg:w-1/2'>
        <h2 className='text-5xl font-black'>
          Somos el mejor aliado para {" "}
          <span className='text-[#EABC4D]'>potencializar tus finanzas</span>
        </h2>
        <p className='text-[32px] leading-9 mt-16'>
          En CXP estamos motivados en potencializar la adopción masiva
          de las criptomonedas facilitándote todas nuestras herramientas
          y conocimientos a nuestra comunidad, nuestro equipo de expertos
          con más de 10 años de experiencia ha desarrollado herramientas
          para llevar tus finanzas al siguiente nivel.
        </p>
        <div className='flex justify-center items-center gap-20 pt-12'>
          <Link href="/#">
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="35" viewBox="0 0 43 35" fill="none">
              <path d="M38.9358 0.307448C33.3954 2.62192 9.63918 12.5447 3.0748 15.2496C-1.32788 16.9831 1.25004 18.606 1.25004 18.606C1.25004 18.606 5.00791 19.9052 8.22932 20.8805C11.4507 21.8545 13.1685 20.7726 13.1685 20.7726L28.307 10.4861C33.6755 6.80449 32.3872 9.83582 31.0989 11.1363C28.307 13.9518 23.6902 18.3902 19.8253 21.9638C18.1076 23.4801 18.9665 24.7793 19.7183 25.4282C22.5103 27.8106 30.1344 32.6834 30.5625 33.0085C32.8312 34.6274 37.292 36.9579 37.9712 32.0331L40.6561 15.035C41.515 9.29618 42.3739 3.99035 42.4809 2.47535C42.8033 -1.20622 38.9371 0.30878 38.9371 0.30878L38.9358 0.307448Z" fill="#EFEBE7" />
            </svg>
          </Link>
          <Link href="/#">
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="36" viewBox="0 0 47 36" fill="none">
              <path d="M39.4633 3.01085C36.4429 1.58324 33.2521 0.570146 29.9739 0C29.5586 0.746726 29.088 1.75084 28.7602 2.56192C25.2736 2.02768 21.7301 2.02768 18.2435 2.56192C17.8705 1.68649 17.4553 0.830527 16.9963 0C13.7137 0.570146 10.52 1.58773 7.49815 3.02432C1.50988 12.193 -0.116134 21.1463 0.693958 29.9603C4.2097 32.6435 8.14797 34.6846 12.3369 35.9955C13.2795 34.6831 14.1144 33.2929 14.8327 31.8399C13.4719 31.3176 12.1576 30.6726 10.9075 29.9139C11.2339 29.6611 11.5501 29.4052 11.856 29.1493C19.227 32.7303 27.7723 32.7303 35.1433 29.1493C35.4551 29.4141 35.78 29.67 36.1035 29.9184C34.8504 30.6816 33.5333 31.3296 32.1696 31.8533C32.8864 33.3049 33.7213 34.6921 34.6639 36C38.8557 34.6936 42.794 32.6525 46.3068 29.9648C47.2553 19.7441 44.6692 10.8732 39.4618 3.01085H39.4633ZM15.8555 24.5462C13.5855 24.5462 11.722 22.4108 11.722 19.7875C11.722 17.1642 13.5433 15.0123 15.8555 15.0123C18.1678 15.0123 20.0138 17.1478 19.9934 19.774C19.973 22.4003 18.1678 24.5447 15.8555 24.5447V24.5462ZM31.138 24.5462C28.868 24.5462 27.0045 22.4108 27.0045 19.7875C27.0045 17.1642 28.8257 15.0123 31.138 15.0123C33.4503 15.0123 35.2963 17.1478 35.2715 19.774C35.2467 22.4003 33.4503 24.5447 31.138 24.5447V24.5462Z" fill="#EFEBE7" />
            </svg>
          </Link>
          <Link href="/#">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="35" viewBox="0 0 33 35" fill="none">
              <path d="M12.29 0V7.86805H16.5005V4.06975H20.711V0H32.5V11.6664H28.5703V15.4656H24.6407L24.6224 19.5502L28.5703 19.5353V23.3336H32.5V35H20.711V30.9303H16.5005V27.1319H12.29V35H0.5V0H12.29Z" fill="#EFEBE7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
