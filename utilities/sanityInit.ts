import {createClient} from '@sanity/client'

export const sanityClient = createClient({
    projectId: 'nfvjxp0o', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: true // `false` if you want to ensure fresh data
  })