const pipedriveSdk = require('pipedrive');
const config = require('../config');


// Configure API key authorization: api_key
// let api_key = apiClient.authentications['api_key'];
// api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
// let oauth2 = apiClient.authentications['oauth2'];
// oauth2.accessToken = 'YOUR ACCESS TOKEN';

// let apiInstance = new Pipedrive.DealsApi(apiClient);
// let opts = Pipedrive.NewDeal.constructFromObject({
//   // Properties that you want to update
// });

// async function addDeal(req, res, next) {
// const apiClient = pipedriveSdk.ApiClient.instance;

// let oauth2 = apiClient.authentications.oauth2;
// oauth2.clientId = config.clientId;
// oauth2.clientSecret = config.clientSecret;
// oauth2.redirectUri = config.redirectUri;

// req.apiClient = apiClient;

// next();
// apiInstance.addDeal(opts).then((data) => {
//   console.log('API called successfully. Returned data: ' + data);
// }, (error) => {
//   console.error(error);
// });
// }
// module.exports = addDeal;

const { saveRecord } = require('../database/todo');

async function handler(req, res) {
    const { title } = req.body;
    const { userId, companyId, dealId } = req.params;

    if (!title) {
        return res.send('title is not set');
    }

    const data = await saveRecord(userId, companyId, dealId, { title });

    res.json(data);
}

module.exports = handler;