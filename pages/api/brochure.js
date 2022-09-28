const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log(body);

  const messageText = `
  Name: ${body.name}\r\n\
  Email: ${body.email}\r\n\
  Telephone: ${body.telephone}
  `;

  const email = {
    to: 'danny@clydeventures.com',
    from: 'help@clydeventures.com',
    subject: 'Brochure Download',
    text: messageText,
  };

  await sgMail.send(email).then(
    (success) => {
      res.status(200).json('success');
    },
    (error) => {
      res.status(500).json('error');
    }
  );
}
