const express = require('express');
const router = express.Router();
const {
  getVehicleInfoFromGm,
  getVehicleDoorInfo,
  getFuelRange,
  getBatteryRange,
  startOrStopEngine
} = require('./vehicles.controllers');

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  getVehicleInfoFromGm(req, res, next, id);
});

router.get('/:id/doors', (req, res) => {
  const { id } = req.params;
  getVehicleDoorInfo(req, res, next, id);
});

router.get('/:id/fuel', (req, res) => {
  const { id } = req.params;
  getFuelRange(req, res, next, id);
});

router.get('/:id/battery', (req, res) => {
  const { id } = req.params;
  getBatteryRange(req, res, next, id);
});

router.post('/vehicles/:id/engine', (req, res) => {
  const { id } = req.params;
  startOrStopEngine(req, res, next, id);
});

module.exports = router;
