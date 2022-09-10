// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log(process.env.SENDGRID_API_KEY);

  // const msg = {
  //   to: 'help@clydeventures.com',
  //   from: 'help@clydeventures.com', // Use the email address or domain you verified above
  //   subject: 'Test Email',
  //   text: 'Testing the email system',
  //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  // };
  // //ES6
  // sgMail.send(msg).then(
  //   () => {},
  //   (error) => {
  //     console.error(error);

  //     if (error.response) {
  //       console.error(error.response.body);
  //     }
  //   }
  // );
  // //ES8
  // (async () => {
  //   try {
  //     await sgMail.send(msg);
  //   } catch (error) {
  //     console.error(error);

  //     if (error.response) {
  //       console.error(error.response.body);
  //     }
  //   }
  // })();

  res.status(200).json({ status: 'Ok' });
}
