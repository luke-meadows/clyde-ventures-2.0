export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const requestOptions = {
    method: 'POST',
    mode: 'no-cors',
  };

  const recordTypeIds = {
    Consultancy: '0128d000000MGwC',
    Integration: '0128d000000MGwD',
    Education: '0128d000000MGwB',
  };

  const oid = process.env.SALESFORCE_OID;
  const retUrl = 'https://www.clydeventures.com/';
  const firstName = body.firstName;
  const lastName = body.surname;
  const email = body.email;
  const telephone = body.telephone;
  const company = body.company;
  const recordTypeId = recordTypeIds[body.interest];
  const description = body.message;
  const leadSource = 'Website';

  await fetch(
    `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=${oid}&retURL=${retUrl}&first_name=${firstName}&last_name=${lastName}&company=${company}&email=${email}&phone=${telephone}&recordType=${recordTypeId}&description=${description}&leadSource=${leadSource}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((success) => {
      res.status(200).json('success');
    })
    .catch((error) => console.log('error', error));
}
