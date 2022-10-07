import Link from 'next/link';
import React, {useState} from 'react'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

  return (
    <nav className={`w-full bg-black md:bg-white shadow-md ${
        navbar ? "bg-black" : "bg-white"
    }`}>
        <div className='justify-between mx-auto md:items-center md:flex'>
            <div>
                <div className='flex items-center justify-between py-3 md:py-1 md:block'>
                    <Link href="/">
                        <a>
                            <h2 className={`text-3xl font-bold pl-7 md:pl-12 md:text-black ${
                                navbar ? "text-white" : "text-black"
                            }`}>Spot on</h2>
                        </a>
                    </Link>
                    <div className='md:hidden pr-7'>
                        <button 
                            className='p-2 text-gray-700 rounded-md outline-none'
                            onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                                ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                                )}
                            </button>
                    </div>
                </div>
            </div>
            <div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}>
                    <ul className='items-center justify-center md:flex md:space-x-20 md:space-y-0 pl-12'>
                        <Link href="#">
                            <a><li className='text-gray-600 text-2xl hover:text-red-500 md:hover:underline md:hover:text-gray-600'>Stories</li></a>
                        </Link>
                        <Link href="#">
                            <a><li className='text-gray-600 text-2xl hover:text-teal-500 md:hover:underline md:hover:text-gray-600 py-6'>Events</li></a>
                        </Link>
                        <Link href="/about">
                            <a><li className='text-gray-600 text-2xl hover:text-yellow-500 md:hover:underline md:hover:text-gray-600'>About</li></a>
                        </Link>
                    </ul>
                </div>
                <hr></hr>
                <div 
                    className={`text-xs pl-12 py-10 text-gray-500 leading-6 md:hidden ${
                        navbar ? "block" : "hidden"
                    }`}>
                    <ul>
                        <Link href="#">
                            <a className='hover:underline'><li>Publiziere bei uns</li></a>
                        </Link>
                        <Link href="#">
                            <a className='hover:underline'><li>Organisiere Events</li></a>
                        </Link>
                        <Link href="#">
                            <a className='hover:underline'><li>Promote deine Events bei uns</li></a>
                        </Link>
                    </ul>
                </div>
                <hr></hr>
                <div 
                    className={`text-xs pl-12 py-10 text-gray-500 leading-6 md:hidden ${
                        navbar ? "block" : "hidden"
                    }`}>
                    <ul>
                        <Link href="https://www.linkedin.com/company/spotted-spoton/">
                           <a className='hover:underline'><li>LinkedIn</li></a>
                        </Link>
                        <Link href="https://www.youtube.com/channel/UC59wse-F-tMDluY6Nd0CGnQ">
                           <a className='hover:underline'><li>YouTube</li></a>
                        </Link>
                        <Link href="https://open.spotify.com/show/5TRz38pBcVy1AZ23UBi3J4?si=5_L1EkX6R0CBZmNpyQhQ5g&nd=1">
                           <a className='hover:underline'><li>people Podcast Spotify</li></a>
                        </Link>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div 
                className={`text-xs text-gray-500 pl-12 py-10 md:hidden ${
                    navbar ? "block" : "hidden"
                }`}>
                <p>Möchtest du Teil unseres Netzwerkes werden, um <br></br>
                gemeinsam unsere Arbeitswelt von morgen zu <br></br> 
                gestalten? Dann bist du bei SPOT ON richtig.</p>
            </div>
            <div 
                className={`text-s p-4 md:p-6 bg-gray-600 text-white md:bg-black cursor-pointer md:block ${
                    navbar ? "block" : "hidden"
                }`}>
                <button className=''>Newsletter</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar