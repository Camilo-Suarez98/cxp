import Image from 'next/image';
import React from 'react';
import ReviewContainer from './ReviewContainer';

const reviewsData = [
  {
    reviewerName: "Ana R.",
    job: "Trader de Criptomonedas."
  },
  {
    reviewerName: "Carlos M.",
    job: "Inversor en Criptomonedas."
  }
]

const ReviewsSections = () => {
  return (
    <div className='flex flex-col items-center my-8 mx-4 lg:mx-24 lg:flex-row'>
      <div className='lg:w-1/2'>
        <Image
          src="/review-img.png"
          width={670}
          height={770}
          alt='Women checking phone'
        />
      </div>
      <div className='flex flex-col gap-8 lg:w-1/2'>
        <h4 className='text-4xl font-bold mt-8 lg:mt-0'>Lo que dicen nuestros Usuarios</h4>
        <div className='flex flex-col gap-8'>
          {reviewsData.map(({ reviewerName, job }) => (
            <ReviewContainer
              key={reviewerName}
              reviewerName={reviewerName}
              job={job}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSections;
