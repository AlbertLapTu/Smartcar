const express = require('express');
const app = express();
const vehicleRoutes = require('./api/vehicles/vehicles.routes');
require('./middleware/appMiddleware')(app);

app.use('/vehicles/', vehicleRoutes);

//Set-up global error handling
// app.use('/', (req, res) => {
//   console.log(res.send('Hello world!'));
// });

/** Remember to handle your errors or else express won't know what to do */

module.exports = app;
