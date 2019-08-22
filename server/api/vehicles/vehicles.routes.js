const express = require('express');
const router = express.Router();
const { getVehicleInfoFromGm } = require('./vehicles.controllers');

router.post('/', (req, res, next) => {
  const id = req.body.id;
  getVehicleInfoFromGm(req, res, next, id);
});

module.exports = router;

// //What we have here is /api/vehicles/:id
// router
//   .route('/doors')
//   .get(vehiclesControllers.controller)
//   .post();

// router.route('/fuel');

// router.route('/battery');

// router.route('/engine');

// //Vehicle info
// app.get('/vehicles/:id', (req, res) => {});

// //Security / unlock
// app.get('/vehicles/:id/doors', (req, res) => {});

// //Fuel range
// app.get('/vehicles/:id/fuel', (req, res) => {});

// //Battery range
// app.get('/vehicles/:id/battery', (req, res) => {});

// //Engine info
// app.post('/vehicles/:id/engine', (req, res) => {});

// */

// export default router;
