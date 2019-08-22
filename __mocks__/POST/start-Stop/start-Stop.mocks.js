const START_VEHICLE_RESPONSE = require('./execute.json');
const STOP_VEHICLE_RESPONSE = require('./failed.json');

module.exports = {
  startCar: jest.fn(() => Promise.resolve(START_VEHICLE_RESPONSE)),
  stopCar: jest.fn(() => Promise.resolve(STOP_VEHICLE_RESPONSE))
};
