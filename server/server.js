const express = require('express');
const app = express();
const vehicleRoutes = require('./api/vehicles/vehicles.routes');
require('./middleware/appMiddleware')(app);

app.use('/vehicles/', vehicleRoutes);

app.get('/', (req, res, next) => {
  res.send(`
    <h1>Welcome to the smaller version of Smartcar!<h1>
    <h3>List of available endpoints
    <ul>
      <li>GET /vehicles/:id</li>
      <li>GET /vehicles/:id/doors</li>
      <li>GET /vehicles/:id/(fuel || battery)</li>
      <li>POST /vehicles/:id/engine</li>
    </ul>
  `);
});

//Global error handler
app.use((err, req, res, next) => {
  res.status(404).json({
    error: 'Invalid request. Check console messages for additional error detail',
    statusCode: err.httpStatusCode
  });
});

module.exports = app;
