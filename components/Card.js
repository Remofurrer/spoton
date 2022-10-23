import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client';

// get sanity Image data
function urlFor (source) {
    return imageUrlBuilder(sanityClient).image(source)
  }

const Card = ({ post }) => {
  return (
    <div className='py-2 md:px-2'>
        <div className='border rounded-md p-4 bg-white cursor-pointer'>
            <img className='w-full' src={urlFor(post.mainImage).url()}
                    width='500'
                    height='500' 
                    alt="Mainn Image"/>
            <h2 className='text-2xl py-6'>{post.title}</h2>
            <p className='opacity-60'>{post.description}</p>
        </div>
    </div>
  )
}

export default Card