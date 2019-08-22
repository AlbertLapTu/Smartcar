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
  engineMessagePayload
} = require('../../lib/payloadFormattingHelpers');

const getVehicleInfoFromGm = (req, res, next, vehicleId) => {
  axios(getVehicleInfoService(vehicleId))
    .then(response => {
      if (response.data.status === '404') {
        res.status(response.data.status);
        return next();
      } else {
        const { vin, color, fourDoorSedan, driveTrain } = response.data.data;

        let payload = {
          vin: vin.value,
          color: color.value,
          doorCount: fourDoorSedan.value === 'True' ? 4 : 2,
          driveTrain: driveTrain.value
        };
        return res.send(payload);
      }
    })
    .catch(err => console.error(err));
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
    .catch(err => console.error(err));
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
    .catch(err => console.error(err));
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
    .catch(err => console.error(err));
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
    .catch(err => console.error(err));
};

module.exports = {
  getVehicleInfoFromGm,
  getVehicleDoorInfo,
  getFuelRange,
  getBatteryRange,
  startOrStopEngine
};
