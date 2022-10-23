// [slug].js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import sanityClient from '../../client'
import {useRouter} from 'next/router'
import Link from 'next/link'

function urlFor (source) {
  return imageUrlBuilder(sanityClient).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt="image one"
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({post}) => {

  const router = useRouter()
  if (router.isFallback) {
     return <div>Loading...</div>
  }

  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    mainImage,
    publishedAt,
    body = []
  } = post

  return (
    <div className='pb-20 px-10 md:px-20 md:flex md:justify-evenly md:items-start md:space-x-20'>
      {/* left section */}
      <div className='pt-14 pb-20'>
      <img
            src={urlFor(mainImage)
              .width(500)
              .url()}
            alt="image"
          />
      <div className='bg-gray-100 p-4 mt-6 rounded-xl'>
        <p className='opacity-60 pb-2'>Teile diesen Beitrag mit deinen Freund*innen<br></br>
        auf deiner bevorzugten Plattform</p>
        <div className='text-sm'>
          <ul className='flex'>
            <li><Link href="#"><a className='underline'>Facebook,</a></Link>&nbsp;</li>
            <li><Link href="#"><a className='underline'>Linkedin,</a></Link>&nbsp;</li>
            <li><Link href="#"><a className='underline'>Twitter,</a></Link>&nbsp;</li>
            <li><Link href="#"><a className='underline'>WhatsApp,</a></Link>&nbsp;</li>
          </ul>
        </div>
      </div>

      </div>

      {/* right section */}
      <div className='md:pt-16 md:h-[80vh] md:overflow-scroll md:scrollbar-hide md:w-[50vw]'>
        <div className='text-4xl pb-12'>
          <p className='text-sm py-14 md:pb-20 pt-0'>{publishedAt}</p>
          <h2>{title}</h2>
        </div>
        <div className='opacity-60'>
          <PortableText 
          value={body}
          components={ptComponents}
          />
        </div>

        <div>
        {authorImage && (
        <div className='flex justify-start items-center py-10'>
          <img
          className='rounded-full w-16 h-16'
            src={urlFor(authorImage)
              .url()}
            alt="image"
          />
        <span className='text-xl md:text-3xl pl-10'>{name}</span>
        </div>
      )}
        </div>
        <div className='bg-gray-100 p-2 w-40 text-center rounded-full'>
        {categories && (
              <ul className='text-sm'>
                {categories?.map((category, id) => <li key={id}>{category}</li>)}
              </ul>
            )}
        </div>
      </div>
    </div>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  mainImage,
  publishedAt,
  body
}`

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await sanityClient.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post