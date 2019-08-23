const getVehiclePayloadFormat = responseObject => {
  const { vin, color, fourDoorSedan, driveTrain } = responseObject.data.data;

  let payload = {
    vin: vin.value,
    color: color.value,
    doorCount: fourDoorSedan.value === 'True' ? 4 : 2,
    driveTrain: driveTrain.value
  };
  return payload;
};

const filterDoors = responseObject => {
  return responseObject.data.data.doors.values.map(door => {
    return {
      location: door.location.value,
      locked: door.locked.value
    };
  });
};

const filterByEnergySource = (responseObject, energySource) => {
  let energyValue = Number(responseObject.data.data[energySource].value);
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
  getVehiclePayloadFormat,
  filterDoors,
  filterByEnergySource,
  formatEngineActionPayload,
  engineMessagePayload
};
