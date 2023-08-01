import type { NextApiRequest, NextApiResponse } from 'next'

const nodemailer = require('nodemailer');

export default function handler(request: NextApiRequest, response: NextApiResponse<any>) {

  const message = {
    from: request.body.email,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: `${request.body.name} - ${request.body.subject}`,
    text: request.body.message,
    html: `<p>${request.body.message}</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_ADDRESS,
      password: process.env.GMAIL_PASSWORD,
    },
  });

  if (request.method === 'POST') {
    transporter.sendMail(message, (error: any, info: any) => {

      if (error) {
        response.status(404).json({
            error: `Connection refused at ${error.address}`
        });
      } else {
        response.status(250).json({
            success: `Message delivered to ${info.accepted}`
        });
      }
    });
  }
}