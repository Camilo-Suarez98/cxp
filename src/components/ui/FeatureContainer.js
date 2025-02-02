import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeatureContainer = ({ src }) => {
  console.log('src', src);

  return (
    <div className='flex flex-col border-2 border-[#EFEBE7] rounded-2xl mt-8'>
      <div>
        <Image
          src={src}
          width={670}
          height={510}
          className='lg:h-[310px]'
          alt='Features Gallery Image'
        />
      </div>
      <div className='flex flex-col gap-4 p-4'>
        <h3 className='text-2xl font-bold lg:text-xl'>Lorem ipsum dolor sit amet.</h3>
        <p className='text-xl leading-5 lg:text-lg lg:leading-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
        </p>
        <div className='flex justify-end'>
          <Link
            href="/#"
            className='text-2xl font-bold border-[1px] border-[#EFEBE7] backdrop-blur-sm py-[6px] px-4 rounded-lg'
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureContainer;
