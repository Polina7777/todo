const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');

const errorHandler = require('./middlewares/error-handler');
const apiClient = require('./middlewares/api-client');
const jwtCheck = require('./middlewares/jwt-check');
const config = require('./config');

const path = require('path');
const app = express();
const port = 3000;

app.use(errorHandler);
app.use(apiClient);
app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, 'build/static')));

app.get('/callback', require('./endpoints/oauth/callback'));
app.delete('/callback', require('./endpoints/oauth/uninstall'));


 app.all('/', jwtCheck(config.surfaceJwt), require('./endpoints/surface-render'));


 app.use('/todo/:userId/:companyId/:dealId', jwtCheck(config.surfaceJwt));



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
