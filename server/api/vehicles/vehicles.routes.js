const express = require('express');
const router = express.Router();
const { handleInvalidId } = require('../../lib/errorHandlers');
const {
  getVehicleInfoFromGm,
  getVehicleDoorInfo,
  getFuelRange,
  getBatteryRange,
  startOrStopEngine
} = require('./vehicles.controllers');

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  if (!id || !handleInvalidId(id)) {
    const error = new Error('Not a valid id, ID parameter expects numbers as a valid ID type');
    error.httpStatusCode = 400;
    return next(error);
  }
  getVehicleInfoFromGm(req, res, next, id);
});

router.get('/:id/doors', (req, res, next) => {
  const { id } = req.params;
  if (!id || !handleInvalidId(id)) {
    const error = new Error('Not a valid id, ID parameter expects numbers as a valid ID type');
    error.httpStatusCode = 400;
    return next(error);
  }
  getVehicleDoorInfo(req, res, next, id);
});

router.get('/:id/fuel', (req, res, next) => {
  const { id } = req.params;
  if (!id || !handleInvalidId(id)) {
    const error = new Error('Not a valid id, ID parameter expects numbers as a valid ID type');
    error.httpStatusCode = 400;
    return next(error);
  }
  getFuelRange(req, res, next, id);
});

router.get('/:id/battery', (req, res, next) => {
  const { id } = req.params;
  if (!id || !handleInvalidId(id)) {
    const error = new Error('Not a valid id, ID parameter expects numbers as a valid ID type');
    error.httpStatusCode = 400;
    return next(error);
  }
  getBatteryRange(req, res, next, id);
});

router.post('/:id/engine', (req, res, next) => {
  const { id } = req.params;
  const { action } = req.body;
  if (!id || !action || !handleInvalidId(id)) {
    const error = new Error('A valid id or action_type is required');
    error.httpStatusCode = 400;
    return next(error);
  }
  startOrStopEngine(req, res, next, id, action);
});

module.exports = router;
