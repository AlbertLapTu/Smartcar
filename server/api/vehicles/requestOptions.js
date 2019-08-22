//Need to add in parameters to pass into ID

const getVehicleInfo = id => {
  return {
    method: 'POST',
    url: 'http://gmapi.azurewebsites.net/getVehicleInfoService/',
    headers: {
      'content-type': 'application/json'
    },
    data: {
      id: id,
      responseType: 'JSON'
    }
  };
};

const getSecurityStatus = id => {
  return {
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

const getEnergy = id => {
  return {
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

const actionEngine = (id, command) => {
  return {
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
  getVehicleInfo,
  getSecurityStatus,
  getEnergy,
  actionEngine
};
