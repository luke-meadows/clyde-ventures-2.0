export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const requestOptions = {
    method: 'POST',
    mode: 'no-cors',
  };

  const recordTypeIds = {
    Consultancy: '0128d000000MGwCAAW',
    Integration: '0128d000000MGwDAAW',
    Education: '0128d000000MGwBAAW',
  };
  const ownerUserIds = {
    //Ross
    Consultancy: '2F0058d000006RwNj',
    // Graham
    Integration: '0058d0000051c5f',
    // Danny
    Education: '0058d000006RwNI',
  };

  const oid = process.env.SALESFORCE_OID;
  const retUrl = 'https://www.clydeventures.com/';
  const firstName = body.firstName;
  const lastName = body.surname;
  const email = body.email;
  const telephone = body.telephone;
  const company = body.company;
  const ownerId = '0058d000006RwNI';
  // const recordTypeId = '0128d000000MGwDAAW';
  //   const recordTypeId = recordTypeIds[body.interest];
  //   const ownerId = ownerUserIds[body.interest];

  await fetch(
    `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=${oid}&retURL=${retUrl}&first_name=${firstName}&last_name=${lastName}&company=${company}&email=${email}&phone=${telephone}&recordOwner=${ownerId}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((success) => {
      res.status(200).json('success');
    })
    .catch((error) => console.log('error', error));
}
