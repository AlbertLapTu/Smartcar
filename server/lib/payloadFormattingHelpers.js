const filterDoors = responseObject => {
  return responseObject.data.data.doors.values.map(door => {
    return {
      location: door.location.value,
      locked: door.locked.value
    };
  });
};

const filterByEnergySource = (responseObject, energySource) => {
  let energyValue = parseInt(responseObject.data.data[energySource].value);
  let roundedEnergyValue = Math.round(energyValue * 10) / 10;

  return { percent: roundedEnergyValue };
};

const formatEngineActionPayload = action => {
  //reformat to all uppercase
  action = action.toUpperCase();
  action = action === 'START' ? 'START_VEHICLE' : 'STOP_VEHICLE';

  return action;
};

const engineMessagePayload = responseObject => {
  //vehicleStatus will always be uppercase, but just in case
  let vehicleStatus = responseObject.data.actionResult.status;
  vehicleStatus = vehicleStatus === 'EXECUTED' ? 'success' : 'error';

  return {
    status: vehicleStatus
  };
};

module.exports = {
  filterDoors,
  filterByEnergySource,
  formatEngineActionPayload,
  engineMessagePayload
};
