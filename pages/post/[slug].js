// [slug].js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import sanityClient from '../../client'
import {useRouter} from 'next/router'

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
    body = []
  } = post
  return (
    <article>
      <h2>{title}</h2>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
      {authorImage && (
        <div>
          <img
            src={urlFor(authorImage)
              .width(50)
              .url()}
            alt="image"
          />
        </div>
      )}
      <PortableText
        value={body}
        components={ptComponents}
      />
    </article>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
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