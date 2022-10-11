import Image from 'next/image'
import React from 'react'
import news from '../public/news.png'


const events = () => {
  return (
    <div>
        <div className='md:flex md:items-center justify-center px-4 md:px-20 md:space-x-20'>
            <Image src={news} alt="newsletter image"/>
            <div>
                <h2 className='text-xl py-4'>Verpasse keine News mehr</h2>
                <p>Melde dich bei unserem Newsletter an und du bist bei allen Events und Stories dabei.</p>
                <button className='text-white bg-red-500 p-3 mt-3 rounded'>Newsletter</button>
            </div>
        </div>
    </div>
  )
}

export default events