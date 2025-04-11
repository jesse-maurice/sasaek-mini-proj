import React from 'react';

import Chairman from '../images/Mask group (1).png';

const ChairmanAddress = () => {
  return (
    <>
      <div className="flex flex-col w-full px-[150px]">
        <div className="w-full border-2 border-red-400 flex items-center justify-between gap-[102px] mb-[120px]">
          <div className="w-full">
            <h1 className=" font-bold text-4xl leading-[150%]">Chairman's greeting.</h1>
            <p>
              Hello, I am Oh Deok-gyun, the CEO of Sasaekuihyanggi.
              <br />
              The fragrance of thought has been working to create a better
              society through ‘sharing a happy culture.’ We will continue to
              share the values ​​of literature and humanities and grow together
              as an open community.
              <br />I ask for your interest and support. Thank you.
            </p>
            <h2>Oh Deok-gyun, Chairman of the Sasaekhyanggi Foundation</h2>
            <h3>More interviews</h3>
          </div>
          <div className="w-full">
            <img src={Chairman} alt="" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default ChairmanAddress