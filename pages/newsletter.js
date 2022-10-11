import React from 'react';
import Link from 'next/link';
import newsletter from '../public/newsletter.webp';
import Image from 'next/image';

const Newsletter = () => {
  return (
    <div className='px-5'>
        <div className='pt-14 pb-20 text-3xl md:text-5xl'>
            <h2>Newsletter</h2>
        </div>
        <div className='opacity-60 space-y-4 md:max-w-md'>
            <p>Registriere dich für spannende #SpottedStories und verpasse keine unserer #SpotOnEvents. </p>
            <p>Du kannst dich jederzeit abmelden, indem du auf den Link in der Fusszeile unserer E-Mails klickst. Informationen zu unseren <Link href="/datenschutz"><span className='underline cursor-pointer text-blue-700 hover:text-blue-800'>Datenschutzpraktiken</span></Link> findest du auf unserer Webseite im Footer.</p>
        </div>
        <div className='text-bold text-xl py-10'>
            <h2>Melde dich für unseren Newsletter an.</h2>
        </div>

        <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Anrede <span className='text-red-700'>*</span>
            </label>
            <select className="block p-2 appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" placeholder='Anrede' required>
                <option>Liebe</option>
                <option>Lieber</option>
                </select>            
            </div>
            <div className='flex flex-col-2 mx-3 mb-6 mt-3 w-full'>
                <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Vorname <span className='text-red-700'>*</span>
                </label>
                <input className='block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"' placeholder='Vorname *' type='text' required/>
                </div>
                <div className='mx-3'>
                <label className="ml-3 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Name <span className='text-red-700'>*</span>
                </label>
                <input className='ml-3 block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"' placeholder='Name *' type='text' required/>
                </div>
            </div>
            <div className='w-full px-3 mb-6 md:mb-3'>
                <label type="email" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="grid-email">Deine E-Mail <span className='text-red-700'>*</span></label>
                <input className='block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Deine Email *' required/>
            </div>
            <div className='w-full px-3 mb-6 md:mb-0 mt-3'>
                <label type="text" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor="grid-email">Unternehmen <span className='text-red-700'>*</span></label>
                <input className='block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Unternehmen *' required/>
            </div>
        </div>
        <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
            </div>
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ich stimme zu meine persönlichen Daten an SPOT ON zu geben </label>
        </div>
        <div className='pb-20'>
            <button className='bg-black text-white p-3 rounded'>Abonnieren</button>
        </div>
        <div className=''>
            <Image src={newsletter}alt="newsletter image"/>
        </div>
        </form>
    </div>
  )
}

export default Newsletter