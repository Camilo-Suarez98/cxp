import React from 'react';

const ReviewContainer = ({ reviewerName, job }) => {
  return (
    <div className='p-4 border-[1px] border-[#EABC4D] rounded-2xl'>
      <p className='text-3xl italic'>
        “Las señales de CXP me han ayudado a mejorar mi estrategia de trading. No son infalibles, pero definitivamente son una herramienta valiosa en mi arsenal”
      </p>
      <p className='text-4xl font-bold mt-2'>
        <span className='text-[#EABC4D]'>{reviewerName}</span> {" "}
        {job}
      </p>
    </div>
  );
};

export default ReviewContainer;
