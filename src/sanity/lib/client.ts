// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId : '4pr3ven',
//   dataset: 'production',
//   apiVersion :'2023-01-01' ,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })

import { createClient } from 'next-sanity';

export const Client = createClient({
  projectId: '84pr3ven',  // Replace with your Sanity project ID
  dataset: 'production', 
        // Replace with your Sanity dataset
  useCdn: true,                  // Use the CDN for faster performance
});
