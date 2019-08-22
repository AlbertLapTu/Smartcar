const sedan = require('./vehicle1234.sedan-battery.fuel.response.json');
const coupe = require('./vehicle1235.coupe-battery.fuel.response.json');

module.exports = {
  getCoupeInfo: jest.fn(() =>
    Promise.resolve({
      status: coupe.status,
      batteryData: coupe.data.batteryLevel,
      fuelData: coupe.data.fuelLevel
    })
  ),
  getSedanInfo: jest.fn(() =>
    Promise.resolve({
      status: coupe.status,
      batteryData: sedan.data.batteryLevel,
      fuelData: sedan.data.fuelLevel
    })
  )
};
