// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from "@/utilities/sanityInit";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { documentId } = req.query; 

  try {
    const document = await sanityClient.fetch('*[_type == "post"]')

    if (typeof document === 'object') {
      res.status(200).json(document); // Respond with the document as JSON
    } else {
      res.status(200).send(document); // Respond with the document as is (e.g., string, Buffer)
    }
  } catch (error) {
    console.error('Error fetching Sanity document:', error);
    res.status(500).json({ message: 'Error fetching document' });
  }
}
