const axios = require('axios');
// const { getVehicleInfo, getSecurityStatus, getEnergy, actionEngine } = require('./requestOptions');

const getVehicleInfoFromGm = (req, res, next, vehicleId) => {
  let options = {
    method: 'POST',
    url: 'http://gmapi.azurewebsites.net/getVehicleInfoService/',
    headers: {
      'content-type': 'application/json'
    },
    data: {
      id: vehicleId,
      responseType: 'JSON'
    }
  };

  axios(options)
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
  //Why console.error
};

const getVehicleDoorInfo = (req, res, next, id) => {
  let options = {
    method: 'POST',
    url: 'http://gmapi.azurewebsites.net/getSecurityStatusService',
    headers: {
      'content-type': 'application/json'
    },
    data: {
      id: id,
      responseType: 'JSON'
    }
  };
};

const getFuelRange = (req, res, next, id) => {
  let options = {
    method: 'POST',
    url: 'http://gmapi.azurewebsites.net/getEnergyService',
    headers: {
      'content-type': 'application/json'
    },
    data: {
      id: id,
      responseType: 'JSON'
    }
  };
};

const getBatteryRange = (req, res, next, id) => {
  let options = {
    method: 'POST',
    url: 'http://gmapi.azurewebsites.net/getEnergyService',
    headers: {
      'content-type': 'application/json'
    },
    data: {
      id: id,
      responseType: 'JSON'
    }
  };
};

const startOrStopEngine = (req, res, next, id) => {
  let options = {
    method: 'POST',
    url: 'http://gmapi.azurewebsites.net/actionEngineService',
    headers: {
      'content-type': 'application/json'
    },
    data: {
      id: id,
      command: command,
      responseType: 'JSON'
    }
  };
};

module.exports = {
  getVehicleInfoFromGm,
  getVehicleDoorInfo,
  getFuelRange,
  getBatteryRange,
  startOrStopEngine
};
