import axios from 'axios';

const sendEmail = async (name: string, email: string, subject: string, message: string) => {
  return axios({
    method: 'post',
    url: '/api/sendEmail',
    data: {
      name: name,
      email: email,
      subject: subject,
      message: message,
    },
  });
};

export default sendEmail;