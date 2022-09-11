const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log(process.env.SENDGRID_API_KEY);
  console.log(body);

  const messageText = `
  Name: ${body.name}\r\n\
  Email: ${body.email}\r\n\
  Message: ${body.message}
  `;

  const msg = {
    to: 'help@clydeventures.com',
    from: 'help@clydeventures.com',
    subject: body.subject,
    text: messageText,
  };

  await sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );

  res.status(200).json({ status: 'Ok' });
}
