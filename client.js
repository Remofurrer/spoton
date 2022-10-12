import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'z8l8r62x', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})