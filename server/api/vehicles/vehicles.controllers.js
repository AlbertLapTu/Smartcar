const axios = require('axios');
// const { getVehicleInfo, getSecurityStatus, getEnergy, actionEngine } = require('./requestOptions');

const getVehicleInfoFromGm = (req, res, next, vehicleId) => {
  console.log(vehicleId, 'vehicleId');
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
        return res.status(response.data.status).json({
          error: response.data.reason
        });
      } else {
        let payload = {
          vin: response.data.data.vin.value,
          color: response.data.data.color.value,
          doorCount: response.data.data.fourDoorSedan === 'True' ? 4 : 2,
          driveTrain: response.data.data.driveTrain.value
        };
        return res.send(payload);
      }
    })
    .catch(err => console.log(err));
};

module.exports = {
  getVehicleInfoFromGm
};
