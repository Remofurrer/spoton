import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-black text-white space-y-10 px-10 py-20 md:flex md:justify-between md:items-top md:px-32 leading-5'>

        {/* first section */}
        <div className='space-y-10'>
            <h2 className='text-3xl'>spot on</h2>
            <p className='font-thin'>SPOT ON ist die digitale Stimme der <br></br> Arbeitswelt von morgen.</p>
        </div>

        {/* second section */}
        <div className='flex-col font-thin text-sm text-gray-600 underline leading-6'>
            <div className='pb-10'>
                <Link href="#">
                    <a><p>hello@spoton.com</p></a>
                </Link>
            </div>
            <ul>
                <Link href="#">
                    <a><li>LinkedIn</li></a>
                </Link>
                <Link href="#">
                    <a><li>YouTube</li></a>
                </Link>
                <Link href="#">
                    <a><li>People Podcast Spotify</li></a>
                </Link>
            </ul>
        </div>

        {/* third section */}
        <div className='flex-col font-thin text-sm text-gray-600 underline leading-6'>
            <ul>
                <Link href="#">
                    <a><li>Publiziere bei uns</li></a>
                </Link>
                <Link href="#">
                    <a><li>Organisiere Events</li></a>
                </Link>
                <Link href="#">
                    <a><li>Promote deine Events bei uns</li></a>
                </Link>
            </ul>
        </div>

        {/* fourth section */}
        <div className='flex-col font-thin text-sm text-gray-600 underline leading-6'>
            <ul>
                <Link href="#">
                    <a><li>Datenschutz</li></a>
                </Link>
                <Link href="#">
                    <a><li>Impressum</li></a>
                </Link>
            </ul>
        </div>      
    </div>
  )
}

export default Footer