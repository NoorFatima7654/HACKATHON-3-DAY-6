// // /**
// // * This configuration file lets you run `$ sanity [command]` in this folder
// // * Go to https://www.sanity.io/docs/cli to learn more.
// // **/
// // import { defineCliConfig } from 'sanity/cli'

// // // const projectId = process.env.'84pr3ven'
// // // const dataset = process.env.production
// // const projectId = process.env.PROJECT_ID; // PROJECT_ID ko .env file me define karein
// // const dataset = process.env.PRODUCTION;  // PRODUCTION ko bhi .env file me set karein

// // export default defineCliConfig({ api: { projectId, dataset } })
// import sanityClient, { createClient } from '@sanity/client';

// export const client = createClient({
//   projectId: '84pr3ven',
//   dataset: 'production',
//   apiVersion: '2023-01-01', // نیا API ورژن ڈالیں
//   useCdn: true,
// });
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "84pr3ven",
  dataset: "production",
  apiVersion: "2025-01-01",  // یہاں API کا ورژن دیں
  useCdn: true,
});

export default client;
