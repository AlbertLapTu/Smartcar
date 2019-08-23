const express = require('express');
const app = express();
const vehicleRoutes = require('./api/vehicles/vehicles.routes');
require('./middleware/appMiddleware')(app);

app.use('/vehicles/', vehicleRoutes);

app.use((err, req, res, next) => {
  res.status(404).json({
    error: 'Current API endpoint does not exist'
  });
});

module.exports = app;
