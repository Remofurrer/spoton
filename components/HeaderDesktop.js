import React from 'react';
import Image from 'next/image';
import rectangle from '../public/rectangle.png'

const HeaderDesktop = () => {
  return (
    <div className='relative' text-center>
      <Image className='' src={rectangle}/>
    </div>
  )
}

export default HeaderDesktop