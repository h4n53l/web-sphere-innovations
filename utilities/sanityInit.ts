import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
    projectId: 'nfvjxp0o', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    apiVersion: '2023-05-03',
    useCdn: true // `false` if you want to ensure fresh data
  })

  
  
export function urlFor(source: any) {
  const builder = imageUrlBuilder(sanityClient)
  return builder.image(source)
}

