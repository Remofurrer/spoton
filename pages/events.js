import Image from 'next/image'
import React from 'react'
import news from '../public/news.png'
import microphone from '../public/microphone.png'
import disrupt from '../public/disrupt.png'
import megafone from '../public/megafone.png'
import event from '../public/event-unsplash.jpg'
import Link from 'next/link'
import groq from 'groq'
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url';
import { PopupButton } from '@typeform/embed-react'
import rechts from '../public/rechtsoben.svg';
import links from '../public/links.svg';
import styles from '../styles/Header.module.css';


function urlFor (source) {
    return imageUrlBuilder(sanityClient).image(source)
  }

const events = ({posts}) => {
  return (
    <div>
    <div className={styles.Header}>
    <Image src={links} />
    <Image src={rechts} />
</div>
<div className={styles.Container}>
    <h2 className='text-5xl'>Events</h2>
</div>
    <div className='space-y-20'>
        <div className='bg-gray-100 space-y-20 pt-20 pb-20'>
        <div className='md:flex md:px-40 p-4 md:space-x-10'>
            {/* left section */}
            <div className='pb-4'>
                <h2 className='text-2xl'>SPOT ON Events</h2>
            </div>
            {/* right section */}
            <div>
                <p>Unsere Netzwerk- und Fachevents bringen Menschen zusammen für einen nachhaltigen Austausch, gegenseitige Inspiration und konkrete Handlungsschritte.</p>
            </div>
        </div>

        <div className='md:flex md:px-40 p-4 md:space-x-10'>
            {/* left section */}
            <div className='pb-4'>
                <h2 className='text-2xl'>Disrupt Zürich</h2>
            </div>
            {/* right section */}
            <div>
                <p>Organisierst du einen wertvollen Event für HRler und Arbeitsgestalter*innen? Gerne veröffentlichen wir ihn auf unserer Webseite. </p>
            </div>
        </div>

        <div className='md:flex md:px-40 p-4 md:space-x-10'>
            {/* left section */}
            <div className='pb-4'>
                <h2 className='text-2xl'>Deine Events</h2>
            </div>
            {/* right section */}
            <div>
                <p>Unsere Netzwerk- und Fachevents bringen Menschen zusammen für einen nachhaltigen Austausch, gegenseitige Inspiration und konkrete Handlungsschritte.</p>
            </div>
        </div>
        </div>

        <div className='px-4 py-4'>
        {posts.slice(0, 2).map(
          ({ _id, title = '', slug = '', description, mainImage }) =>
            slug && (
              <div key={_id} className='py-2 md:px-2 md:flex md:space-x-4'>
                <div className='relative'>
                <div className='w-20 text-center text-2xl absolute top-10 left-10 md:static'>
                  <p className='bg-red-500 text-white rounded-t-lg'>Nov</p>
                  <p className='bg-white rounded-b-lg'>17</p>
                </div>
                </div>
              <Link href="#">
              <div className='border rounded-md p-4 bg-white cursor-pointer'>
              <img className='w-full' src={urlFor(mainImage).url()}
                width='500'
                height='500' 
                alt="Mainn Image"/>
                <h2 className='text-2xl py-6'>{title}</h2>
                <p className='opacity-60'>{description}</p>
              </div>
              </Link>
              </div>
            )
        )}
        </div>

                <div className='md:flex md:items-center justify-center px-4 md:px-20 md:space-x-20 py-20'>
            <Image src={microphone} alt="disrupt image"/>
            <div>
                <div className='space-y-4'>
                    <h2 className='text-4xl py-4'>Promote deine Events, Workshops oder Webinare bei uns.</h2>
                    <p>Organisierst du einen wertvollen Event, Workshop oder Kurs mit Themen zur Zukunft der Arbeitswelt, Methoden der Kollaboration, inclusive / purposeful / kollegialer Führung, Organisationsmodelle, Future Skills, Selbstreflexion, Innovation, Zusammenarbeit etc.?</p>
                    <p>Dann lass uns dies wissen und wir veröffentlichen deinen Event auf unserer Webseite. </p>
                    <div>
                    <ul className='list-disc pl-10'>
                        <li>Die Events müssen zur Vision von SPOT ON passen. Wir behalten uns vor Events nicht zu veröffentlichen.  </li>
                        <li>Jegliche Events, welche Produkte oder Dienstleistungen anpreisen oder sonst irgendetwas verkaufen oder promoten - direkt oder indirekt - werden nicht publiziert.</li>
                    </ul>
                    </div>
                    <PopupButton className='text-white bg-red-500 p-3 mt-3 rounded' id="S0F9AzGE">Promote Your Event</PopupButton>
                </div>
            </div>
        </div>

        <div className='md:flex md:items-center justify-center px-4 md:px-20 md:space-x-20 bg-gray-100 py-20'>
            <Image src={event} alt="disrupt image"/>
            <div>
                <div className='space-y-4'>
                    <h2 className='text-4xl py-4'>Werde DisruptHR Speaker.</h2>
                    <p>Wir organisieren jährlich eins bis zwei DisruptHR Events in Zürich zusammen mit Timo Plattner, Chief People Officer der PIDAS AG. </p>
                    <p>DisruptHR Reden sind inspirierend, überzeugend und erfrischend kurz:</p>
                    <div>
                    <ul className='list-disc pl-10'>
                        <li>5 Minuten </li>
                        <li>20 Slides</li>
                        <li>No Sales-Pitch</li>
                    </ul>
                    </div>
                    <p>Das sind die Vorgaben der weltweiten DisruptHR-Organisation.</p>
                    <p>Beim anschliessenden Apéro tauschen sich unsere neun bis elf Speaker*innen und rund 130 Gäste untereinander aus. </p>
                    <Link type="email" href="mailto:hello@spoton.ch">
                        <a><button className='text-white bg-red-500 p-3 mt-3 rounded'>Kontakt</button></a>
                    </Link>
                </div>
            </div>
        </div>

        <div className='md:flex md:items-center justify-center px-4 md:px-20 md:space-x-20'>
            <Image src={event} alt="megafone image"/>
            <div>
                <div className='space-y-4'>
                    <h2 className='text-4xl py-4'>Organisiere Events mit uns.</h2>
                    <p>Wir organisieren wertvolle Fach- und Netzwerkevents für HR und Arbeitsgestalter*innen, zusammen mit Unternehmen. </p>
                    <p>Unser Ziel ist Vernetzung, Sichtbarkeit und Stärkung von HR und allen Gestalter*innen, die unsere Arbeitswelt der Zukunft formen und fördern. </p>
                    <div>
                    <ul className='list-disc pl-10'>
                        <li>Unternehmen stellen ihre Cases zu einem fachspezifischen Thema im Bereich HR, Arbeit oder Future Work vor mit dem Ziel einen Austausch auf Augenhöhe anzuregen. </li>
                        <li>Unternehmen erhalten die Möglichkeit sich und ihre Macher*innen vorzustellen, stellen sich als Arbeitgeber vor und etablieren sich als Meinungsführer.</li>
                    </ul>
                    </div>
                    <p>Interesse mit uns einen solchen Fachevent zu organisieren? </p>
                    <PopupButton className='text-white bg-red-500 p-3 mt-3 rounded' id="S0F9AzGE">Organize Events Together</PopupButton>
                </div>
            </div>
        </div>

        <div className='md:flex md:items-center justify-center px-4 md:px-20 md:space-x-20 bg-gray-100'>
            <Image src={news} alt="newsletter image"/>
            <div>
                <div>
                    <h2 className='text-4xl py-4'>Verpasse keine News mehr</h2>
                    <p>Melde dich bei unserem Newsletter an und du bist bei allen Events und Stories dabei.</p>
                    <button className='text-white bg-red-500 p-3 mt-3 rounded'>Newsletter</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export async function getStaticProps() {
    const posts = await sanityClient.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    return {
      props: {
        posts
      }
    }
}

export default events