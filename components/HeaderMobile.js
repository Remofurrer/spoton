import React from 'react';
import Image from 'next/image';
import rectangleMobile from '../public/rectanglemobile.png'

const HeaderMobile = () => {
  return (
    <div>
      <Image
        className='bg-contain' 
        src={rectangleMobile}
      />
    </div>
  )
}

export default HeaderMobile