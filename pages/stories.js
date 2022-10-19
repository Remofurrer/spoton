import React from 'react'
import Link from 'next/link'
import groq from 'groq'
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

function urlFor (source) {
    return imageUrlBuilder(sanityClient).image(source)
  }
  
  const stories = ({posts}) => {
      return (
        <div className='bg-gray-100'>
          <div className='md:grid md:grid-cols-3 px-4 py-4'>
          {posts && posts.map(
            ({ _id, title, slug, description, mainImage, categories }) =>
              slug && (
                <div key={_id} className='py-2 md:px-2'>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                <div className='border rounded-md p-4 bg-white cursor-pointer'>
                <img className='w-full' src={urlFor(mainImage).url()}
                  width='500'
                  height='500' 
                  alt="Mainn Image"/>
                  <h2 className='text-2xl py-6'>{title}</h2>
                  <p>{description}</p>
                </div>
                </Link>
                </div>
              )
          )}
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


export default stories