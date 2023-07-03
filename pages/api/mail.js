const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const subjects = {
    Other: 'General Query',
    Consultancy: 'Consultancy Query',
    Integration: 'Integration Query',
    Manufacturing: 'Manufacturing Query',
    Education: 'Education Query',
  };
  const body = JSON.parse(req.body);
  const messageText = `
  Name: ${body.firstName} ${body.surname}\r\n\
  Email: ${body.email}\r\n\
  Telephone: ${body.telephone || 'No telephone provided'}\r\n\
  Company: ${body.company}\r\n\
  Message: ${body.message}
  `;

  const email = {
    to: 'help@clydeventures.com',
    from: 'help@clydeventures.com',
    subject: subjects[body.interest],
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
