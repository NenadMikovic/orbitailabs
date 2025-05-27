import { createClient } from 'next-sanity';

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error('Missing SANITY_PROJECT_ID or SANITY_DATASET in environment variables');
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2023-01-01',
  useCdn: true,
});
