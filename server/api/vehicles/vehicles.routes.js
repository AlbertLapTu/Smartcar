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

router.get('/:id/doors', (req, res, next) => {
  const { id } = req.params;
  getVehicleDoorInfo(req, res, next, id);
});

router.get('/:id/fuel', (req, res, next) => {
  const { id } = req.params;
  getFuelRange(req, res, next, id);
});

router.get('/:id/battery', (req, res, next) => {
  const { id } = req.params;
  getBatteryRange(req, res, next, id);
});

router.post('/:id/engine', (req, res, next) => {
  const { id } = req.params;
  const { action } = req.body;
  startOrStopEngine(req, res, next, id, action);
});

module.exports = router;
