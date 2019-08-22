const { formatEngineActionPayload } = require('../../lib/payloadFormattingHelpers');

module.exports = {
  getVehicleInfoService: vehicleId => {
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

    return options;
  },
  getSecurityStatusService: vehicleId => {
    let options = {
      method: 'POST',
      url: 'http://gmapi.azurewebsites.net/getSecurityStatusService',
      headers: {
        'content-type': 'application/json'
      },
      data: {
        id: vehicleId,
        responseType: 'JSON'
      }
    };

    return options;
  },
  getEnergyService: vehicleId => {
    let options = {
      method: 'POST',
      url: 'http://gmapi.azurewebsites.net/getEnergyService',
      headers: {
        'content-type': 'application/json'
      },
      data: {
        id: vehicleId,
        responseType: 'JSON'
      }
    };

    return options;
  },
  actionEngineService: (vehicleId, action) => {
    let options = {
      method: 'POST',
      url: 'http://gmapi.azurewebsites.net/actionEngineService',
      headers: {
        'content-type': 'application/json'
      },
      data: {
        id: vehicleId,
        command: formatEngineActionPayload(action),
        responseType: 'JSON'
      }
    };
    return options;
  }
};
