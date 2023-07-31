const express = require("express");
const bodyParser = require('body-parser'); 
const paymentRoutes = require('./router/paymentRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/payments', paymentRoutes)

app.listen(PORT, () => {
  console.log('API is listening on port', PORT);
});