import Link from 'next/link';
import groq from 'groq';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import marti from '../public/marti.png';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import rechts from '../public/rechtsoben.svg';
import links from '../public/links.svg';


// get sanity Image data
function urlFor (source) {
  return imageUrlBuilder(sanityClient).image(source)
}


// Building Layout for frontpage
// destructuring array posts
const Index = ({posts}) => {

    return (
      // stories title and redirect upper button to stories page
      <div className='bg-gray-100'>
                    <div className={styles.Header}>
                <Image src={links} />
                <Image src={rechts} />
            </div>
            <div className={styles.Container}>
                <h2 className='text-5xl'>spot on HR &amp; Future Work</h2>
            </div>
        <div className='p-4 md:p-6 flex items-center justify-between'>
        <h2 className='text-4xl'>Stories</h2>
          <Link href="/stories">
            <a><button className='text-white p-3 bg-red-500 w-32 rounded'>Alle Stories</button></a>
          </Link>
        </div>

        {/* mapping through array and building cards */}
        <div className='md:grid md:grid-cols-3 px-4 py-4'>
          {posts.slice(2, 8).map(
            ({ _id, title = '', slug = '', description, mainImage, categories }) =>
            slug && (
              <div key={_id} className='py-2 md:px-2'>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
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

        {/* lower button for redirecting to stories page */}
        <div className='flex justify-center'>
          <Link href="/stories">
            <a><button className='text-white p-3 bg-red-500 w-32 rounded'>Alle Stories</button></a>
          </Link>
        </div>


        {/* Spotify section by balz marti with integrated player */}
        <div className='p-6 md:flex md:space-x-20 pt-20 pb-10 bg-white mt-20'>
        {/* left section */}
          <div>
            <Image className='rounded-lg' src={marti} />
          </div>
          {/* right section */}
            <div className='space-y-4'>
              <h2 className='text-4xl'>People Podcast by Balz Marti</h2>
              <p>Klug und zugleich witzig betrachtet Balz Marti zusammen mit dem Enkel des legendären Peter Drucker die aktuellen HR-Themen in der Arbeitswelt. </p>
              <iframe src="https://open.spotify.com/embed/show/5TRz38pBcVy1AZ23UBi3J4?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        <div className='pb-20 flex justify-center bg-white'>
          <Link href="https://open.spotify.com/show/5TRz38pBcVy1AZ23UBi3J4?_authfailed=1">
            <a><button className='text-white p-3 bg-red-500 w-44 rounded'>auf Spotify hören</button></a>
          </Link>
        </div>

        {/* events title and redirect upper button to events page */}
        <div className='p-4 md:p-6 flex items-center justify-between'>
        <h2 className='text-4xl'>Events</h2>
          <Link href="/events">
            <a><button className='text-white p-3 bg-red-500 w-32 rounded'>Alle Events</button></a>
          </Link>
        </div>

        {/* mapping through array for display event cards and slice it to the only first 2 */}
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

      </div>
    )
}

// fetchiung data from sanity backend using getStaticProps
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

export default Index