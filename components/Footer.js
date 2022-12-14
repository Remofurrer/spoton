import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-black text-white space-y-10 px-10 py-20 md:flex md:justify-between md:items-top md:px-32 leading-5'>

        {/* first section */}
        <div className='space-y-10'>
            <h2 className='text-3xl pt-10'>spot on</h2>
            <p className='font-thin text-sm'>SPOT ON ist die digitale Stimme der <br></br> Arbeitswelt von morgen.</p>
        </div>

        {/* second section */}
        <div className='flex-col font-thin text-xs text-gray-600 underline leading-6'>
            <div className='pb-10'>
                <Link type="email" href="mailto:hello@spoton.ch">
                    <a><p>hello@spoton.com</p></a>
                </Link>
            </div>
            <ul>
                <Link href="https://www.linkedin.com/company/spotted-spoton/">
                    <a><li>LinkedIn</li></a>
                </Link>
                <Link href="https://www.youtube.com/channel/UC59wse-F-tMDluY6Nd0CGnQ">
                    <a><li>YouTube</li></a>
                </Link>
                <Link href="https://open.spotify.com/show/5TRz38pBcVy1AZ23UBi3J4?si=5_L1EkX6R0CBZmNpyQhQ5g&nd=1">
                    <a><li>People Podcast Spotify</li></a>
                </Link>
            </ul>
        </div>

        {/* third section */}
        <div className='flex-col font-thin text-xs text-gray-600 underline leading-6'>
            <ul>
                <Link href="/about/participation">
                    <a><li>Publiziere bei uns</li></a>
                </Link>
                <Link href="/about/participation">
                    <a><li>Organisiere Events</li></a>
                </Link>
                <Link href="/about/participation">
                    <a><li>Promote deine Events bei uns</li></a>
                </Link>
            </ul>
        </div>

        {/* fourth section */}
        <div className='flex-col font-thin text-xs text-gray-600 underline leading-6'>
            <ul>
                <Link href="/datenschutz">
                    <a><li>Datenschutz</li></a>
                </Link>
                <Link href="/impressum">
                    <a><li>Impressum</li></a>
                </Link>
            </ul>
        </div> 
        <div className='flex justify-center text-xs md:hidden'>
            <p>??2022 SPOT GmbH</p>
        </div>     
    </div>
  )
}

export default Footer