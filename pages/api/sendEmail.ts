import type { NextApiRequest, NextApiResponse } from 'next'

const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID, 
  process.env.CLIENT_SECRET, 
  process.env.REDIRECT_URL
);


export default async function handler(request: NextApiRequest, response: NextApiResponse<any>) {

  const message = {
    from: request.body.email,
    to: process.env.GMAIL_ADDRESS,
    subject: `${request.body.name} ${request.body.subject}`,
    text: request.body.message,
    html: `
    <p>${request.body.name} - ${request.body.email}</p>
    <p>${request.body.message}</p>
    `,
  };

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_ADDRESS,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN
    },
  });

  if (request.method === 'POST') {
    
    await transporter.sendMail(message, (error: any, info: any) => {

      if (error) {
        response.status(404).json({
            error: `Connection refused at ${error.address}`
        });
      } else {
        response.status(200).json({
            status: `Message delivered to ${info.accepted}`
        });
      }
    });
  }
}