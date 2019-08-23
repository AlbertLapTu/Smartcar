const axios = require('axios');
const {
  getVehicleInfoService,
  getSecurityStatusService,
  getEnergyService,
  actionEngineService
} = require('./requestOptions');
const {
  filterDoors,
  filterByEnergySource,
  engineMessagePayload,
  getVehiclePayloadFormat
} = require('../../lib/payloadFormattingHelpers');

const getVehicleInfoFromGm = (req, res, next, vehicleId) => {
  axios(getVehicleInfoService(vehicleId))
    .then(response => {
      if (response.data.status === '404') {
        res.status(response.data.status);
        return next();
      } else {
        res.send(getVehiclePayloadFormat(response));
      }
    })
    .catch(err => next(err));
};

const getVehicleDoorInfo = (req, res, next, id) => {
  axios(getSecurityStatusService(id))
    .then(response => {
      if (response.data.status === '404') {
        res.status(response.data.status);
        return next();
      } else {
        let payload = filterDoors(response);
        return res.send(payload);
      }
    })
    .catch(err => next(err));
};

const getFuelRange = (req, res, next, id) => {
  axios(getEnergyService(id))
    .then(response => {
      if (response.data.status === '404') {
        res.status(response.data.status);
        return next();
      } else {
        return res.send(filterByEnergySource(response, 'tankLevel'));
      }
    })
    .catch(err => next(err));
};

const getBatteryRange = (req, res, next, id) => {
  axios(getEnergyService(id))
    .then(response => {
      if (response.data.status === '404') {
        res.status(response.data.status);
        return next();
      } else {
        return res.send(filterByEnergySource(response, 'batteryLevel'));
      }
    })
    .catch(next(err));
};

const startOrStopEngine = (req, res, next, id, action) => {
  axios(actionEngineService(id, action))
    .then(response => {
      if (response.data.status === '404') {
        res.status(response.data.status);
        return next();
      } else {
        return res.send(engineMessagePayload(response));
      }
    })
    .catch(next(err));
};

module.exports = {
  getVehicleInfoFromGm,
  getVehicleDoorInfo,
  getFuelRange,
  getBatteryRange,
  startOrStopEngine
};
