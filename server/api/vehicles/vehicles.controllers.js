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
    .catch(next);
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
    .catch(next);
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
    .catch(next);
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
    .catch(next);
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
    .catch(next);
};

module.exports = {
  getVehicleInfoFromGm,
  getVehicleDoorInfo,
  getFuelRange,
  getBatteryRange,
  startOrStopEngine
};
